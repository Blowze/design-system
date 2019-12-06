import Vue from "vue"
import App from "@/App"
import router from "@/router"

import DesignSystem from "@/system"

Vue.use(DesignSystem)

new Vue({
    render: h => h(App),
    router,
    components: { App }
}).$mount('#app')