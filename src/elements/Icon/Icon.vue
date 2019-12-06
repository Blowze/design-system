<script>
    import '../../assets/icon/like.svg';

    export default {
        name: 'Icon',
        props: ['size', 'name', 'width', 'height', 'color', 'active'],
        data() {
            return {
                sizes: {
                    l: 'icon_size_l',
                    m: 'icon_size_m',
                    s: 'icon_size_s',
                    xl: 'icon_size_xl',
                    xs: 'icon_size_xs',
                    xxl: 'icon_size_xxl'
                },
            };
        },
        computed: {
            classObject() {
                let content = {};
                const sizeClass = this.sizes[this.size];
                const nameClass = 'icon_name_' + this.name;
                const colorClass = this.color;
                const activeClass = this.active;

                if (typeof sizeClass !== 'undefined') content[sizeClass] = true;
                if (typeof colorClass !== 'undefined') content['icon_color_' +
                    colorClass] = true;
                if (activeClass == true) content['icon_active'] = true;

                content[nameClass] = true;

                return content;
            }
        },
        methods: {
            innerClick(e) {
                this.$emit('click', e);
            }
        }
    };

</script>

<template>
    <svg class="icon" :class="classObject">
        <use x="0" y="0" :xlink:href="'#' + name" :width="width"
            :height="height"></use>
    </svg>
</template>
<style lang="scss" scoped>

.icon{
    display: inline-block;
    vertical-align: middle;
    background-position: 50%;
    background-repeat: no-repeat;
    &_size{
        &_xl{
            width: 36px;
            height: 36px;
        }
        &_l{
            width: 30px;
            height: 30px;
        }
        &_m{
            width: 24px;
            height: 24px;
        }
        &_xs{
            width: 12px;
            height: 12px;
        }
    }
}

</style>