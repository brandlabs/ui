<template>
    <div v-if="shouldRender" class="sidebarBlock sidebar-category-list">
        <h5 class="sidebarBlock-heading">
            <template v-if="isTopLevelCategory">{{getLeadingCategory.name}}</template>
            <a :href="getLeadingCategory.url" v-else>{{getLeadingCategory.name}}</a>
        </h5>
        <ul class="navList">
            <li v-for="item in getRelatedCategories" class="navList-item" :key="item.id">
                <a class="navList-action" :href="item.url" :alt="item.name" :title="item.name">{{item.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import _ from "lodash";

/**
 * The category title should be a link to the main category. Lets say "Pins" is a subcategory of "Model + Die". So, if someone clicks on "Pins" and it goes to the "Pins" category, "Model + Die" and the subcategories would still be showing, and someone can click on "Model + Die" to go back to that category.
 */
export default {
    props: ["context"],
    computed: {
        shouldRender: function () {
            return this.getLeadingCategory.name && this.getRelatedCategories.length > 0;
        },
        /**
         * @returns - either the parent category OR if no parent category the current category
         */
        getLeadingCategory: function() {
            const { category, categories } = this.context;
            
            if (this.findCategory(category, categories)) {
                return category;
            }

            return this.getParentCategory.parentCategory;
        },
        getParentCategory: function () {
            const { category, categories } = this.context;

            return this.findParentCategory(category, categories);
        },
        isTopLevelCategory: function () {
            const { category, categories } = this.context;
            
            return !!this.findCategory(category, categories);
        },
        /**
         * @returns {Object[]} - if top level category then its subcategories OR the parent category siblings
         */
        getRelatedCategories: function() {
            const { category, categories } = this.context;
            
            if (this.isTopLevelCategory) {
                return _.get(category, 'subcategories', []);
            }

            const { parentCategorySiblings } = this.getParentCategory;

            return this.removeCategory(parentCategorySiblings, category).concat(_.get(category, 'subcategories', []));
        }
    },
    methods: {
        findCategory: function(category, categories) {
            return categories.find(item => Number(item.id) === Number(category.id));
        },
        removeCategory: function (categories, category) {
            return categories.filter(item => Number(item.id) !== Number(category.id)) || [];
        },
        /**
         * @param {Object} category - category which parent category we want to find
         * @param {Object} categories
         * @returns {Object|boolean} - parent category and this parent category children
         */
        findParentCategory(category, categories) {
            for (let i = 0; i < categories.length; i++) {
                const subCategory = categories[i];

                const hasChildren = _.has(subCategory, 'children');
                const children = hasChildren ? subCategory.children : [];

                if (this.findCategory(category, children)) {
                    return { parentCategory: subCategory, parentCategorySiblings: children };
                }

                const parentCategory = this.findParentCategory(category, children);

                if (parentCategory) {
                    return { parentCategory: _.has(parentCategory, 'parentCategory') ? parentCategory.parentCategory : parentCategory, parentCategorySiblings: children };
                }
            }

            return false;
        },
    }
};
</script>
