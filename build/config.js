const path = require("path")

module.exports = {
    build: {
        // Paths
        assetsRoot: path.resolve(__dirname, "../dist"),
        assetsSubDirectory: "assets",
        assetsPublicPath: "/",
    },
    system: {
        // Paths
        assetsRoot: path.resolve(__dirname, "../dist"),
        assetsSubDirectory: "system",
        assetsPublicPath: "/",
        libraryTarget: "umd"
    }
}