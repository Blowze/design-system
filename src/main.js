import Vue from "vue"
import App from "@/App"

// Vue Design System: Auto importing components globally
import DesignSystem from "@/system"

Vue.use(DesignSystem)
new Vue({
    render: h => h(App),
    components: { App }
}).$mount('#app')