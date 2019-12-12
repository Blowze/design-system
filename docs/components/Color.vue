<template>
    <div class="colors">
        <div v-for="(prop, index) in tokens" :key="index" class="color" :class="prop.category"
            v-if="prop.type === 'color'">
            <div class="color__color" :style="{ backgroundColor: prop.value }" />
            <h4 class="text">{{prop.name.replace(/_/g, " ").replace(/color/g, "")}}</h4>
            <div class="color__item text text_size_xs">
                <span > RGB:</span>
                <span >  {{prop.value}}</span>
            </div>
            <div class="color__item text text_size_xs">
                <span>SCSS:</span>
                <span>  ${{prop.name.replace(/_/g, "-")}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import designTokens from "@/assets/tokens/tokens.raw.json"

    export default {
        name: "Color",
        data() {
            return {
                tokens: designTokens.props,
            }
        }
    }
</script>
<style lang="scss">
@import "@/assets/tokens/tokens.scss";


    .colors{
        display: flex;
        flex-wrap: wrap;
        margin: -8px;
    }
    .color{
        padding: 16px;
        border-radius: 6px;
        overflow: hidden;
        margin: 8px;
        box-sizing: border-box;
        box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15);
        width: calc((100%/4) - 16px);
        &__color{
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            margin: -16px;
            margin-bottom: 16px;
            height: 128px;
        }
       
    }
</style>