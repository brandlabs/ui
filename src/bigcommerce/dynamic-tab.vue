<template>
    <div id="dynamicTab">
        <div class="tab-header">
            <button v-for="tab in tabs" @click="onTabClick(tab)" class="tab-button" :class="{ active: tab.visible }">
                {{ tab.key }}
            </button>
        </div>

        <div :ref="tab.key" :id="tab.key" v-for="tab in tabs" v-if="tab.visible" class="tab-body" :class="{ active: tab.visible }">
            <div v-html="tab.description"></div>
        </div>
    </div>
</template>

<script>
    import helper from './helpers';
    export default {
        data() {
            return {
                tabs: [],
                currentTab: null,
            };
        },
        created() {
            this.parseDescription(this.description);
            this.injectTabs(this.selectorsToInject);
            this.activateFirstTab();
        },
        methods: {
            /**
             * make tab active when user will click on that
             * @param {*} tab
             *
             */
            onTabClick(tab) {
                if (tab.visible === true && tab.key === this.currentTab.key) return;
                tab.visible = true;
                if (this.currentTab) {
                    this.currentTab.visible = false;
                }
                this.currentTab = tab;
            },
            /**
             * pars description to extract tabs
             * catch all edgecage and render full descrion
             * as html if something goes wrong
             * @param {*} description
             */
            parseDescription(description) {
                const parsedTabs = helper.parseDescription(description);
                if (parsedTabs) {
                    this.tabs = this.tabs.concat(parsedTabs);
                } else {
                    this.tabs.push({
                        key: this.defaultTabName,
                        description,
                        visible: true,
                    });
                }
            },
            /**
             * Inject additional tab based on selector.
             * @param {*} selector
             */
            injectTabs(selectors) {
                selectors.forEach(item => {
                    const el = document.querySelector(item.selector);
                    if (el) {
                        this.tabs.push({
                            key: item.tabTitle,
                            description: el.innerHTML,
                            visible: false,
                        });
                    }
                });
            },
            /**
             * activate first tab in tabs array. set visible prop - true
             */
            activateFirstTab() {
                if (this.tabs.length === 0) return;
                const activeTab = this.tabs[0];
                activeTab.visible = true;
                this.currentTab = activeTab;
            },
        },
        props: {
            description: {
                type: String,
                required: true,
            },
            selectorsToInject: {
                type: Array,
                required: false,
            },
            defaultTabName: {
                type: String,
                required: true,
            },
        },
    };
</script>

<style lang="scss">
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
