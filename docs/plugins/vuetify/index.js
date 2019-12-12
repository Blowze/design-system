import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import './main.scss'
import designTokens from "@/assets/tokens/tokens.json"

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: designTokens.color_base_project 
			},
		},
	},
})