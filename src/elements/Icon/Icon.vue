<template>
  <component :is="type" :class="['icon',  `icon_name_${name}`, `icon_size_${size}`]" v-html="svg" />
</template>

<script>
  // const req = require.context("@/elements/Icon/ui/", true, /^\.\/.*\.svg$/)
  /**
   *  Описание компонента
   */
  export default {
    name: "flxv-icon",
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
    data: function() {
      return {
        // svg: req("./" + this.name + ".svg").replace(/^<svg /,
        //   `<svg style="fill: ${this.fill}; stroke: ${this.stroke}"`),
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
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
    <flxv-icon name="favorite" fill="#000000" size="xs" />
    <flxv-icon name="favorite" fill="#522915" size="s" />
    <flxv-icon name="favorite" fill="#00985f" size="m" />
    <flxv-icon name="favorite" fill="#ff3333" size="l" />
    <flxv-icon name="favorite" fill="#ff9900" size="xl" />
    <flxv-icon name="favorite" fill="#03a9f4" size="xxl" />
    <flxv-icon name="favorite" fill="#63003b" size="xxxl" />
  </div>
  <hr />
  <div>
    <flxv-icon name="shopping_basket" fill="#000000" stroke="#000000" size="xs" />
    <flxv-icon name="shopping_basket" fill="#522915" stroke="#522915" size="s" />
    <flxv-icon name="shopping_basket" fill="#00985f" stroke="#00985f" size="m" />
    <flxv-icon name="shopping_basket" fill="#ff3333" stroke="#ff3333" size="l" />
    <flxv-icon name="shopping_basket" fill="#ff9900" stroke="#ff9900" size="xl" />
    <flxv-icon name="shopping_basket" fill="#03a9f4" stroke="#03a9f4" size="xxl" />
    <flxv-icon name="shopping_basket" fill="#63003b" stroke="#63003b" size="xxxl" />
  </div>
  ```
</docs>