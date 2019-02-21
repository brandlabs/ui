<template>
  <div id="dynamicTab">
    <div class="tab-header">
      <button
        v-for="tab in tabs"
        @click="activeTab = tab"
        class="tab-button"
        :class="{ active: tab === activeTab }"
      >
        {{ tab.key }}
      </button>
    </div>

    <div
      :ref="tab.key"
      :id="tab.key"
      v-for="tab in tabs"
      v-show="tab === activeTab"
      class="tab-body active"
    >
      <div v-html="tab.description"></div>
    </div>
  </div>
</template>

<script>
  import helper from './dynamic-tab-helpers';
  export default {
    data() {
      return {
        tabs: [],
        activeTab: null
      };
    },
    created() {
      this.parseDescription(this.description);
      this.injectTabs(this.selectorsToInject);
      this.activateFirstTab();
    },
    methods: {
      parseDescription(description) {
        const parsedTabs = helper.parseDescription(description);
        this.tabs = this.tabs.concat(parsedTabs);
        if (this.tabs.length === 0) {
          this.tabs.push({
            key: this.defaultTabName,
            description,
          });
        }
      },
      injectTabs(selectors) {
        selectors.forEach(item => {
          const el = document.querySelector(item.selector);
          if (el) {
            this.tabs.push({
              key: item.tabTitle,
              description: el.innerHTML,
            });
          }
        });
      },
      activateFirstTab() {
        this.activeTab = this.tabs[0];
      }
    },
    props: {
      description: {
        type: String,
        required: true
      },
      selectorsToInject: {
        type: Array,
        required: false
      },
      defaultTabName: {
        type: String,
        required: true
      }
    }
  };
</script>

<style>
  .tab-header {
    background-color: black;
    color: white;
  }
  .tab-button {
    padding: 15px;
  }
  .tab-body {
    padding: 15px;
  }
</style>
