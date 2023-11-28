const { SchemaBuilder } = require("updateforge-js")

const builder = new SchemaBuilder()

builder.setMetadata({
    icon: "example.png",
    name: "Happer64Bit",
    author: "Happer",
    description: "IDK"
})

builder.addRelease("1.0", "release", { isTest: true }, "download.url")

console.log(builder.toOutput())