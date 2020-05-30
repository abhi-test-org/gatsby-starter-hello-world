const fs = require("fs-extra")

var cur = 167772160
var bcast = 184549375
var addresses = []
while (cur <= bcast) {
  cur += 1
  addresses.push(cur)
}

exports.onPostBuild = async () => {
  await fs.copy("./functions", "./public/functions")

  fs.copyFile(`./firebase.json`, `./public/firebase.json`, err => {
    if (err) {
      throw err
    }
  })
}
