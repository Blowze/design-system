const path = require("path")
const config = require("./config.js")


exports.assetsSystemPath = function(_path) {
    return path.posix.join(config.system.assetsSubDirectory, _path)
}
