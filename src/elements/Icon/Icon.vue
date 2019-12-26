<template>
  <component :is="type" :class="['icon',  `icon_name_${name}`, `icon_size_${size}`]" v-html="svg" />
</template>

<script>
  const req = require.context("@/elements/Icon/ui/", true, /^\.\/.*\.svg$/)
  /**
   *  Описание компонента
   */
  export default {
    name: "Icon",
    status: "review",
    release: "1.0.0",
    props: {
      /**
       * The name of the icon to display.
       */
      name: {
        required: true,
        default: "settings",
      },
      /**
       * The fill color of the SVG icon.
       */
      fill: {
        type: String,
        default: "currentColor",
      },
      /**
       * The stroke color of the SVG icon.
       */
      stroke: {
        type: String,
        default: "none",
      },
      /**
       * The html element name used for the icon.
       */
      type: {
        type: String,
        default: "span",
      },
      /**
       * The size of the icon. Defaults to medium.
       * `xs|s|m|l|xl|xxl|xxxl`
       */
      size: {
        type: String,
        default: "xl",
        validator: value => {
          return value.match(/(xs|s|m|l|xl|xxl|xxxl)/)
        },
      },
    },
    data() {
      return {
        svg: req("./" + this.name + ".svg").replace(/^<svg /,
          `<svg style="fill: ${this.fill}; stroke: ${this.stroke}"`),
      }
    }
  }
</script>
<style lang="scss" scoped>
  .icon {
    display: inline-block;
    vertical-align: middle;
    background-position: 50%;
    background-repeat: no-repeat;

    &_size {
      &_xs {
        width: 12px;
        height: 12px;
      }

      &_s {
        width: 18px;
        height: 18px;
      }

      &_m {
        width: 24px;
        height: 24px;
      }

      &_l {
        width: 30px;
        height: 30px;
      }

      &_xl {
        width: 36px;
        height: 36px;
      }

      &_xxl {
        width: 48px;
        height: 48px;
      }

      &_xxxl {
        width: 88px;
        height: 88px;
      }
    }
  }
</style>

<docs>
  ```jsx
  <div>
    <Icon name="favorite" fill="#000000" size="xs" />
    <Icon name="favorite" fill="#522915" size="s" />
    <Icon name="favorite" fill="#00985f" size="m" />
    <Icon name="favorite" fill="#ff3333" size="l" />
    <Icon name="favorite" fill="#ff9900" size="xl" />
    <Icon name="favorite" fill="#03a9f4" size="xxl" />
    <Icon name="favorite" fill="#63003b" size="xxxl" />
  </div>
  <hr />
  <div>
    <Icon name="shopping_basket" fill="#000000" stroke="#000000" size="xs" />
    <Icon name="shopping_basket" fill="#522915" stroke="#522915" size="s" />
    <Icon name="shopping_basket" fill="#00985f" stroke="#00985f" size="m" />
    <Icon name="shopping_basket" fill="#ff3333" stroke="#ff3333" size="l" />
    <Icon name="shopping_basket" fill="#ff9900" stroke="#ff9900" size="xl" />
    <Icon name="shopping_basket" fill="#03a9f4" stroke="#03a9f4" size="xxl" />
    <Icon name="shopping_basket" fill="#63003b" stroke="#63003b" size="xxxl" />
  </div>
  ```
</docs>