const path = require("path")
const packageConfig = require("../package.json")

module.exports = {
    title: "585",
    template: {
        favicon: 'https://feliksov.ru/favicon.ico'
    },
    version: packageConfig.version,
    theme: {
        maxWidth: "100%",
        sidebarWidth: 240
    },
    editorConfig: {
        theme: "night",
    },
    pagePerSection: true,
    skipComponentsWithoutExample: false,
    sections: [{
            name: "Them",
            content: "../docs/theme.md",
            sectionDepth: 1,
            exampleMode: "hide",
            usageMode: "hide",
            components: () => [
                "../docs/components/Color.vue"
            ],
        },
        {
            name: "Components",
            content: "../docs/elements.md",
            components: "../src/elements/**/[A-Z]*.vue",
            exampleMode: "expand",
            usageMode: "expand",
            sectionDepth: 2,
        },
    ],
    ignore: [
        "**/App.vue"
    ],
    require: [
        path.join(__dirname, "../docs/docs.styles.scss"),
        path.join(__dirname, "../src/styles/_typography.scss"),
    ],
    renderRootJsx: path.join(__dirname, './styleguide.root.js'),
}