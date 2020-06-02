const fs = require("fs-extra")
const faker = require("faker")

exports.createPages = () => {
  var arr = []
  var a = 1
  while (true) {
    a = a + 1
    arr.push(faker.random.uuid())

    console.log(process.memoryUsage())
  }
}

exports.onPostBuild = async () => {
  await fs.copy("./functions", "./public/functions")

  fs.copyFile(`./firebase.json`, `./public/firebase.json`, err => {
    if (err) {
      throw err
    }
  })
}
