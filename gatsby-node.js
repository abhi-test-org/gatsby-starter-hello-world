const fs = require("fs-extra")

console.dir(process.env)

exports.onPreBuild = async () => {
  let foo = []

  return new Promise((resolve, reject) => {
    while (true) {
      console.log("On pRe Build")
      foo.push({ foo: "foo" })
    }
  })
}

exports.onPostBuild = async () => {
  await fs.copy("./functions", "./public/functions")

  fs.copyFile(`./firebase.json`, `./public/firebase.json`, err => {
    if (err) {
      throw err
    }
  })
}
