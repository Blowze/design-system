// Vue Design System: Auto importing components globally
import FlxvIcon from "./elements/Icon/Icon.vue";

export default {
    install(Vue, options){
        Vue.component("Icon", FlxvIcon);
    }

}
