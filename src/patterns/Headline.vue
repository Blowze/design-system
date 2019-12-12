<template>
  <component :is="tagName" :class="classes">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Heading',

  data() {
    return {
      tagName: 'h2',

      staticClasses: ['heading', 'text', 'text_weight_regular'],

      classes: [],

      properties: []
    };
  },

  props: {
    type: {
      type: String
    },

    view: {
      type: String
    },
    align: {
      type: String
    }
  },

  computed: {
    breakPoint() {
      return 788 >  0
    }
  },

  methods: {
    addClass(className) {
      this.classes.push(className);
    },

    testProps() {
      if (this.type) {
        this.tagName = this.type;
        if (this.tagName === 'h1') {
          if (this.breakPoint) {
            this.addClass('text_size_26');
          } else {
            this.addClass('text_size_4xl');
          }
        } else if (this.tagName === 'h2') {
          if (this.breakPoint) {
            this.addClass('text_size_2xl');
          } else {
            this.addClass('text_size_3xl');
          }
        } else if (this.tagName === 'h3') {
          if (this.breakPoint) {
            this.addClass('text_size_xl');
          } else {
            this.addClass('text_size_2xl');
          }
        }
      }
      if (this.properties.length !== 0) {
        this.properties.forEach(item => {
          if (item.value !== null) {
            this.addClass(`text_${item.name}_${item.value}`);
          }
        });
      }
    }
  },

  watch: {
    breakPoint(val) {
      this.classes = [...this.staticClasses];
      this.testProps();
    }
  },

  created() {
    this.classes = [...this.staticClasses];

    this.properties = [
      {
        name: 'type',
        value: this.type || null
      },
      {
        name: 'view',
        value: this.view || null
      },
      {
        name: 'align',
        value: this.align || null
      }
    ];
    this.testProps();
  }
};
</script>

<style lang="scss" scoped></style>
