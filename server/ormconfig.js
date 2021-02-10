const { join } = require("path");
const { config } = require("./src/config");

module.exports = {
    type: "postgres",
    entities: [join(__dirname, "src", "entities", "!(*.test).+(ts|js)")],
    ...config.database,
 }