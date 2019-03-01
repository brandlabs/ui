<template>
    <div class="specs-table">
        <div class="specs-row" v-for="spec in getSpecs()">
            <dt class="specs-item productView-info-name">{{ spec.key }}:</dt>
            <dd class="specs-item productView-info-value">{{ spec.value }}</dd>
        </div>
    </div>
</template>

<script>
    import transformPathToHierarchy from 'bigcommerce-custom-fields-hierarchy';
    export default {
        data() {
            return {
                specs: [],
            };
        },
        created() {
            if (!this.productData.custom_fields) {
                return;
            }
            const customFieldsObj = transformPathToHierarchy([this.productData], this.nameSpace);
            if (!customFieldsObj) {
                return;
            }
            customFieldsObj.forEach(s => {
                const key = `${this.nameSpace} \\ ${s.path}`;
                const customField = this.productData.custom_fields.find(c => c.name === key);
                if (customField) {
                    this.specs.push({ key: s.path, value: customField.value });
                }
            });
        },
        methods: {
            getSpecs() {
                if (!this.maxNumberOfSpecs) {
                    return this.specs;
                }
                return this.specs.slice(0, this.maxNumberOfSpecs);
            },
        },
        props: {
            nameSpace: {
                type: String,
                required: true,
            },
            maxNumberOfSpecs: {
                type: Number,
                required: false,
            },
            productData: {
                type: Object,
                required: true,
            },
        },
    };
</script>
<style lang="scss"></style>
