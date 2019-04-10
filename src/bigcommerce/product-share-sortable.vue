<template>
    <ul class="productView-addthis socialLinks">
        <li v-for="item in buttons" :class="'socialLinks-item socialLinks-item--' + item.service" :key="item.service">
            <a :class="'addthis_button_' + item.service + ' icon icon--' + item.service">
                <template v-if="item.service === 'google_plusone'">
                    <!-- No custom icons allowed with g+ -->
                </template>

                <span class="addthis-icon addthis-icon--facebook" v-if="item.service === 'facebook'"></span>
                <span class="addthis-icon addthis-icon--twitter" v-if="item.service === 'twitter'"></span>
                <span class="addthis-icon addthis-icon--pinterest" v-if="item.service === 'pinterest'"></span>
                <span class="addthis-icon addthis-icon--email" v-if="item.service === 'email'"></span>
                <span class="addthis-icon addthis-icon--print" v-if="item.service === 'print'"></span>
                <span class="addthis-icon addthis-icon--linkedin" v-if="item.service === 'linkedin'"></span>
                <span class="addthis-icon addthis-icon--google" v-if="item.service === 'google'"></span>
                <span class="addthis-icon addthis-icon--facebook_like" v-if="item.service === 'facebook_like'"></span>
            </a>
        </li>
    </ul>
</template>

<script>
/**
 * By default BigCommerce does provide functionality to reorder the product sharing icons
 * This component provides a way to do so by passing the desired order of the icons as an array. 
 */
export default {
    data: function (params) {
        return {
            defaultOrder: ['facebook', 'twitter', 'linkedin', 'google_plusone', 'pinterest', 'facebook_like', 'email', 'print']
        }
    },
    props: {
        addthis: {
            type: Object,
            required: true
        },
        cdn: {
            type: String,
            default: '//s7.addthis.com/js/300/addthis_widget.js'
        },
        order: {
            type: Array,
            default: function () {
                return this.defaultOrder;
            }
        }
    },
    computed: {
        buttons: function (params) {            
            return Array.from(new Set([...this.order, ...this.defaultOrder])).reduce((result, current) => {
                const button = this.addthis.buttons.find(item => item.service === current);
                
                if (button) {
                    result.push(button);
                    return result;
                }
                return result;
            }, []);
        }
    },
    mounted() {
        if (document.getElementById('addthis-share') !== null) {
          return window.addthis.layers.refresh();
        }

        const el = document.createElement('script');
        el.setAttribute('id', 'addthis-share')
        el.setAttribute('src', `${this.cdn}#pubid=ra-4e94ed470ee51e32`)
        document.body.appendChild(el);
    }
};
</script>
