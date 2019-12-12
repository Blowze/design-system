<script>

  export default {
    name: 'Button',
    data() {
      return {
        status: "prototype",
        release: "1.0.0",
      };
    },

  };
</script>

<docs>
  ```jsx
  <div>
    <v-btn>Кнопка</v-btn>
  </div>
  ```
  ## Размер
  ```jsx
  <div>
    <v-btn large>Кнопка</v-btn>
    <v-btn>Кнопка</v-btn>
    <v-btn small>Кнопка</v-btn>
  </div>
  ```
  ### Во весь экран
  ```jsx
  <div>
    <v-btn block>Кнопка</v-btn>
  </div>
  ```
  ## Цвета
  ```jsx
  <div>
    <v-btn color="primary">Кнопка</v-btn>
    <v-btn color="primary" outlined>Кнопка</v-btn>
  </div>
  ```
</docs>