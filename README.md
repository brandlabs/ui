## Install
```
npm install git+ssh://git@gitlab.brandlabs.net:brandlabs/ui.git --save
```

if you want to try some version that is not merged in master yet u can try to install
```
npm install  git+ssh://git@gitlab.brandlabs.net:brandlabs/ui.git#[branch name] --save
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

- to inject alrady existing element in your page as tab, use property `selectorsToInject` and pass selector and tab title as it is shown in example above.