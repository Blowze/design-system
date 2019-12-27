<template>
  <div class="page">
    <section class="section section_type_main">
      <Heading type="h1" align="center">Иконки проекта viritsa</Heading>
    </section>
    <Icon name="favorite" fill="#522915" size="xs"/>
    <Icon name="favorite" fill="#522915" size="s"/>
    <Icon name="favorite" fill="#522915" size="m"/>
    <Icon name="favorite" fill="#522915" size="l"/>
    <Icon name="favorite" fill="#522915" size="xl"/>
    <Icon name="favorite" fill="#522915" size="xxl"/>
    <Icon name="favorite" fill="#522915" size="xxl"/>

    <br/>

    <Icon name="shopping_basket" fill="#522915" stroke="#522915" size="xs"/>
    <Icon name="shopping_basket" fill="#522915" stroke="#522915" size="s"/>
    <Icon name="shopping_basket" fill="#522915" stroke="#522915" size="m"/>
    <Icon name="shopping_basket" fill="#522915" stroke="#522915" size="l"/>
    <Icon name="shopping_basket" fill="#522915" stroke="#522915" size="xl"/>
    <Icon name="shopping_basket" fill="#522915" stroke="#522915" size="xxl"/>
    <Icon name="shopping_basket" fill="#522915" stroke="#522915" size="xxxl"/>

  </div>
</template>

<script>
  import '../src/styles/_index.scss'
  
  export default {
    name: "app",
  }
</script>

<style lang="scss" scoped>
@import "@/assets/tokens/tokens.scss";

.section{
  &_type{
    &_main{
      min-height: 50vh;
      background: $color-base-project;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
}
</style>