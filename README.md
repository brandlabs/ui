## Install
```
npm install git+ssh://git@github.com:brandlabs/ui.git --save
```

if you want to try some version that is not merged in master yet u can try to install
```
npm install  git+ssh://git@github.com:brandlabs/ui.git#[branch name] --save
```

## Guidelines 

### Import and use installed package in your project

- Import vue componets from ui lib (example)
```js
import dynamicTabs from 'brandlabs-ui/src/bigcommerce/dynamic-tab.vue';
import specsTable from 'brandlabs-ui/src/bigcommerce/specs-table.vue';
```

- render vue componet in your html element (container)
```js
new Vue({
            el: '#productSpecsTab',
            render: h => h(specsTable, {
                props: {
                    nameSpace: 'Specs',
                    productData: this.context.product,
                },
            }),
        });
```

### Use dynamic tab component in product view
- navigate to admin panel
- find the product you want to add dynamic tab
- click on edit
- ![image](/uploads/2c9e39091a8a3b720676428d330f1d9d/image.png)
- in description create table.
- table should have two coulmns. (first one is tab-key/tab name. it should be some short string, the second one is tab content. it can be anything, including images, videos and styled content)
- ![image](/uploads/62ec048a66ba8addcd1eba85858ed465/image.png)
- so after that it will be rendered as tabs
- ![image](/uploads/7a659007836cc8274a7b5dca91c53b65/image.png)

### Render dynamic tab component
```js
return new Vue({
            el: '#productDynamicTabs',
            render: h => h(dynamicTabs, {
                props: {
                    description: this.context.product.description,
                    selectorsToInject: [
                        { selector: '.tab-content.reviews', tabTitle: 'reviews' },
                        { selector: '.js-specs-inject-tab', tabTitle: 'specs' },
                    ],
                    defaultTabName: 'Overview',
                },
            }),
        });
```

- to inject already existing element in your page as tab, use property `selectorsToInject` and pass selector and tab title as it is shown in example above.

### Sidebar category list component

#### Description
Sidebar category list component provides functionality for multi level category list in the sidebar. Lets say "Pins" is a subcategory of "Model + Die". So, if someone clicks on "Pins" and it goes to the "Pins" category, "Model + Die" and the subcategories would still be showing, and someone can click on "Model + Die" to go back to that category.

#### Usage
```js
new Vue({
    el: '.js-vue-category-list',
    render: h => h(SidebarCategoryList, {
        props: {
            context: this.context,
        },
    }),
});
```

### Product share sortable component

#### Description
On the product page product sharing button list is not possible to be sorted. Product share sortable component allows it to be sortable.

#### Usage
```js
new Vue({
    el: '.js-product-share',
    render: h => h(ProductShareSortable, {
        props: {
            addthis: this.context.settings.add_this,
            order: ['facebook', 'twitter', 'pinterest', 'email', 'print'],
        },
    }),
});
```

### Transpiling

current ui lib has some helper js files that need to be transpiled in your project. for that pls add/edit your webpack config file to include current lib.
`include: /(assets\/js|assets\\js|stencil-utils|brandlabs-ui)/,`
