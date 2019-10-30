const path = require('path')

module.exports = {
	title: '585 Дизайн система',
	components: 'src/components/**/[A-Z]*.vue',
    showSidebar: true,
	getComponentPathLine(componentPath) {
		const name = path.basename(componentPath, '.js')
		return `import { ${name} } from 'my-awesome-library';`
	}
}