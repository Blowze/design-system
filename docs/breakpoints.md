Мы используем scss переменные для брейкпоинтов.

```scss
    $screen-xs: 599px; /* Смартфоны */
    $screen-sm: 959px; /* Планшеты в вертикальном режиме */
    $screen-md: 1263px; /* Ноутбуки */
    $screen-lg: 1903px; /* Настольные компьютеры */
```

Пример использования
```scss
@import 'path/theme/_breakpoint/theme_breakpoint_default.scss';

.block {
    width: 100px;
    @media screen and (max-width: $screen-sm) {
        width: 300px;
    }
}

```