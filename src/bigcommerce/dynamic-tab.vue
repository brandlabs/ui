<template>
  <div id="dynamicTab">
    <div class="tab-header">
      <button
        v-for="tab in tabs"
        @click="onTabClick(tab)"
        class="tab-button"
        :class="{ active: tab.visible }"
      >
        {{ tab.key }}
      </button>
    </div>

    <div
      :ref="tab.key"
      :id="tab.key"
      v-for="tab in tabs"
      v-if="tab.visible"
      class="tab-body"
      :class="{ active: tab.visible }"
    >
      <div v-html="tab.description"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [],
        currentTab: null
      };
    },
    created() {
      this.parsDescription(this.description, this.tabs);
      this.injectTabs(this.selectorsToInject, this.tabs);
      this.activateFirstTab();
    },
    methods: {
      onTabClick(tab) {
        if (tab.visible === true && tab.key === this.currentTab.key) return;
        tab.visible = true;
        if (this.currentTab) {
          this.currentTab.visible = false;
        }
        this.currentTab = tab;
      },
      parsDescription(description, tabs) {
        let startRow = -1;
        let endRow = 0;
        while (1 === 1) {
          startRow = description.indexOf('<tr>', endRow);
          endRow = description.indexOf('</tr>', startRow);
          if (startRow === -1 || endRow === -1) break;
          const rowData = description.substr(
            startRow + 4,
            endRow - startRow - 4
          );
          const splited = rowData.split('</td>');
          tabs.push({
            key: splited[0].trim().substr(4),
            description: splited[1].trim().substr(4),
            visible: false
          });
        }
        if (tabs.length === 0) {
          tabs.push({
            key: this.defaultTabName,
            description,
            visible: true
          });
        }
      },
      injectTabs(selectors, tabs) {
        selectors.forEach(item => {
          const el = document.querySelector(item.selector);
          tabs.push({
            key: item.tabTitle,
            description: el.innerHTML,
            visible: false
          });
        });
      },
      activateFirstTab() {
        if (this.tabs.length > 0) {
          const activeTab = this.tabs[0];
          activeTab.visible = true;
          this.currentTab = activeTab;
        }
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
