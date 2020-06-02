const fs = require("fs-extra")
const faker = require("faker")

exports.createPages = () => {
  let list = []
  setInterval(() => {
    const record = new MyRecord()
    list = [...list, record]
  }, 1)
  function MyRecord() {
    var x = faker.name.findName()
    this.name = x.repeat(20000000)
    this.id = x.repeat(20000000)
    this.account = x.repeat(20000000)
    this.account2 = x.repeat(20000000)
    this.account4 = x.repeat(20000000)
  }
  setInterval(() => {
    console.log(process.memoryUsage())
  }, 100)
}

exports.onPostBuild = async () => {
  await fs.copy("./functions", "./public/functions")

  fs.copyFile(`./firebase.json`, `./public/firebase.json`, err => {
    if (err) {
      throw err
    }
  })
}
