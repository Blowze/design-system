const path = require('path')

const {
	version
} = require('./package');

const PORT = parseInt(process.env.PORT || 8080, 10);
const TITLE = '585 Дизайн система';

module.exports = {

	title: TITLE,
	serverPort: PORT,
	components: './src/components/**/index.{ts,js}',
	version,
	showSidebar: true ,
    pagePerSection: true,
	template: {
		favicon: 'https://feliksov.ru/favicon.ico'
	},
	getComponentPathLine(componentPath) {
		const name = path.basename(componentPath, '.vue')
		const dir = path.dirname(componentPath)
		return `import ${name} from '${dir}';`
	  },
	
	styles: {
		Playground: {
            root: {
                margin: '24px 0'
            },
            controls: {
                display: 'none'
            },
            preview: {
                '-webkit-overflow-scrolling': 'touch'
            }
		},
		StyleGuide: {
            root: {
                backgroundColor: 'inherit',
                '@media (max-width: 600px)': {
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    justifyContent: 'flex-start',
                    alignContent: 'stretch',
                    alignItems: 'stretch'
                }
            },
            sidebar: {
                background: '#f3f4f5',
                border: 'none',
                '@media (max-width: 600px)': {
                    padding: 0,
                    order: 1,
                    flex: '1 0 auto',
                    width: '100%'
                }
            },
            footer: {
                display: 'none'
            },
            content: {
                maxWidth: 'none',
                padding: '36px 60px',
                '@media (max-width: 767px)': {
                    padding: '24px 12px',
                    order: 2,
                    flex: '1 0 auto',
                    width: '100%'
                }
            }
		},
        ComponentsList: {
            list: {
                padding: '16px',
                '@media (max-width: 600px)': {
                    whiteSpace: 'nowrap',
                    overflowX: 'auto',
                    '-webkit-overflow-scrolling': 'touch'
                }
            },
            isChild: {
                opacity: 0.6,
                transition: '0.2s',
                fontWeight: '400'
            },
            isSelected: {
                opacity: 1,
                fontWeight: '400'
            }
        }
	
	},
	theme: {
		color: {
			link: '#551a8b',
			linkHover: '#c00',
		},
		fontFamily: {
			base: '"Open Sans", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif'
		}
	},
	sections: [
		{
			name: 'Тема',
			content: 'docs/theme.md',
			sections: [
				{
					name: 'Цвета',
					content: 'docs/color.md',
				},
				{
					name: 'Типографика',
					content: 'docs/typography.md',
				},
				{
					name: 'Иконки',
					content: 'docs/installation.md',
					description: 'The description for the installation section'
				},
				{
					name: 'Брейкпоинты',
					content: 'docs/breakpoints.md',
				},
			],
			sectionDepth: 1
		},
		{
			name: 'Компоненты',
			content: 'docs/ui.md',
			components: ['./src/components/**/index.js'],
			sectionDepth: 1
		}
	]

}