const fs = require("fs-extra")

exports.createPages = () => {
  const list = []
  setInterval(() => {
    const record = new MyRecord()
    list.push(record)
  }, 10)
  function MyRecord() {
    var x = "hii"
    this.name = x.repeat(10000000)
    this.id = x.repeat(10000000)
    this.account = x.repeat(10000000)
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
