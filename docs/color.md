Переменные цветов используются в модификациях блоков и типографики, подчёркивая их смысл или состояние. 
Все переменные для цветов называются по смыслу, и раскидываються по компонентам. 
<hr/>

### Базовые цвета
Базовые цвета используются с префиксом **color-base-...**.
В идеале эта палитра должна использоваться только в создании других палитр.

| Название | цвет | Значение| Переменная |
| --- | --- | --- |
| light  | <span class="color" style="background: #fff;border: 1px solid #ccc;"></span>  | #fff|$color-base-light
| dark  | <span class="color" style="background: #000;"></span> |#000| $color-base-dark |
| project  | <span class="color" style="background: #522915;"></span> |#522915| $color-base-project|
| phantom  | <span class="color" style="background: #e6e6e7;"></span>  |#e6e6e7| $color-base-phantom |
<hr/>

### Статусные цвета
Используються для отоброжения состояния компонента.

| Название | цвет |Значение| Переменная |
| --- | --- | --- |
| success  | <span class="color" style="background: #00985f;"></span>  |#00985f| $color-base-success|
| alert  | <span class="color" style="background: #ff3333;"></span>  |#ff3333| $color-base-alert |
| warning  | <span class="color" style="background: #ff9900;"></span> | #ff9900| $color-base-warning |
<hr/>

### Цвета текста
Цвета текста  используются с префиксом **color-typo-...**.

 Название | цвет | Значение | Переменная |
| --- | --- | --- |
| brand  | <span class="color" style="background: #00985f;"></span>  |$color-base-project| $color-typo-success|
| secondary  | <span class="color" style="background: #333;"></span>  |#333| $color-typo-secondary |
| ghost  | <span class="color" style="background: #9b9b9b;"></span>  |#9b9b9b| $color-typo-ghost |
| success  | <span class="color" style="background: #00985f;"></span>  |$color-base-success| $color-typo-success |
| alert  | <span class="color" style="background: #ff3333;"></span>  |$color-base-alert| $color-typo-alert |
| warning  | <span class="color" style="background: #ff9900;"></span>  |$color-base-warning | $color-typo-warning |
<hr/>


### Цвета ссылок
Цвета ссылок используются c префиксом --color-link

Название | цвет | Значение | Переменная |
| --- | --- | --- |
| default  | <span class="color" style="background: #551a8b;"></span>  |#551a8b| $color-link|
| hover  | <span class="color" style="background: #c00;"></span>  |#c00| $color-link-hover |
<hr/>

#### Пример использования в scss:
```scss
.link{
    color: $color-link;
    &:hover{
        color: $color-link-hover 
    }
}
```


<style>
    .color{
        width: 22px;
        height: 22px;
        display: block
    }
</style>