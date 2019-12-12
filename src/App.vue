<template>
    <v-app>
      <v-content>
        <v-container fluid>
          <router-view class="view" />
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
  import './styles/_typography.scss'
  import './styles/_mixins.scss'

  export default {
    name: "app",
  }
</script>