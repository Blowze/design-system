import Vue from 'vue'
import Vuetify from 'vuetify'
import tocens from '../src/assets/tokens/tokens.json'
import '../src/plugins/vuetify/vuetify.scss'

Vue.use(Vuetify)

// config/styleguide.root.js
export default function (previewComponent) {
	return {
		vuetify: new Vuetify({
			theme: {
				themes: {
					light: {
						primary: tocens.color_base_project,
						
					},
				},
			}
		}),
		render(createElement) {

			return createElement(
				'v-app', {
					props: {
						id: 'v-app'
					}
				},

				[createElement(previewComponent)]
			)
		}
	}
}