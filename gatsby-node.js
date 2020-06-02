const fs = require("fs-extra")
// const faker = require("faker")

exports.createPages = () => {
  let list = []
  let list2 = []
  setInterval(() => {
    const record = new MyRecord()
    list = [...list, record]
  }, 1)

  setInterval(() => {
    const record = new MyRecord()
    list2 = [...list2, record]
  }, 10)
  function MyRecord() {
    var x = (this.name = faker.name.findName().repeat(20000000))
    this.id = faker.random.uuid().repeat(20000000)
    this.id2 = faker.random.uuid().repeat(20000000)
    this.id3 = faker.random.uuid().repeat(20000000)
    this.id4 = faker.random.uuid().repeat(20000000)
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
