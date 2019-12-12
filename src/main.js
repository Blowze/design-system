import Vue from "vue"
import App from "@/App"
import router from "@/router"
import vuetify from '@/plugins/vuetify'

import DesignSystem from "@/system"

Vue.use(DesignSystem)

new Vue({
    render: h => h(App),
    router,
    vuetify,
    components: { App }
}).$mount('#app')