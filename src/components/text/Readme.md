Типографика - основа любого интерфейса.
С помощью компонента text каждый текстовый блок можно обернуть и применять модификаторы.

Кегль, межстрочное расстояние и цвет текста, задаются через переменные в [теме](./#/Тема/Типографика)

<hr>

### Модификаторы блока

Модификатор | Значение | Описание
------------ | -------------------------------------------------- | -------------
align | `center` `left` `right` | выравнивание
decoration| `underline` | Подчеркивание
display | `block` `inline-block` `inline` | Способ отображения блока на странице
size | `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` | Размер
height | `xs` `s` `m` `l` | Межстрочное расстояние
style | `italic` | Курсив
transform | `uppercase` | Верхний регистр
type | `h1` `h2` `h3` `p` | Стиль текста
view | `brand` `link` `secondary` | Цвет
weight | `black` `bold` `semibold` `regular` `light` `thin` | Жирность шрифта

### Пример

```html
<div class="text 
    text_display_block
    text_weight_regular 
    text_type_p 
    text_transform_uppercase 
    text_size_4xl
    ">
    О бренде FELIKSOV</div>
<div class="text 
    text_weight_regular 
    text_type_p 
    text_display_block
    text_align_center
    text_size_2xl
    ">
    О бренде FELIKSOV</div>
<div class="text 
    text_weight_regular 
    text_type_p 
    text_view_link
    text_display_block
    text_align_right
    text_size_xl
    ">
    О бренде FELIKSOV</div>
```
<hr/>

<br/>
<div class="text 
    text_display_block
    text_weight_regular 
    text_type_p 
    text_transform_uppercase 
    text_size_4xl
    ">
    О бренде FELIKSOV</div>
<div class="text 
    text_weight_regular 
    text_type_p 
    text_display_block
    text_align_center
    text_size_2xl
    ">
    О бренде FELIKSOV</div>

<div class="text 
    text_weight_regular 
    text_type_p 
    text_view_link
    text_display_block
    text_align_right
    text_size_xl
    ">
    О бренде FELIKSOV</div>



<style>
    .rsg--code-42 {
        background: #ccc;
        border-radius: 4px;
        padding: 4px;
    }
</style>
