const fs = require("fs-extra")
const faker = require("faker")

exports.createPages = () => {
  var arr = []
  var a = 1
  var b = 154987
  while (a < b) {
    a = a + 1
    arr.push(a.repeat(1000000))
  }
  console.log(arr.length)
  console.log(arr)
}

exports.onPostBuild = async () => {
  await fs.copy("./functions", "./public/functions")

  fs.copyFile(`./firebase.json`, `./public/firebase.json`, err => {
    if (err) {
      throw err
    }
  })
}
