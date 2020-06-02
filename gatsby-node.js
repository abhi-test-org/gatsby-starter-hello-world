const fs = require("fs-extra")
const faker = require("faker")

exports.createPages = () => {
  const list = []
  setInterval(() => {
    const record = new MyRecord()
    list.push(record)
  }, 10)
  function MyRecord() {
    var x = faker.random.name()
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
