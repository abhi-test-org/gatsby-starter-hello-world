const React = require("react")
const io = require("socket.io-client")

exports.wrapRootElement = ({ element }) => {
  React.useEffect(() => {
    const socket = io()

    socket.on("reload", data => {
      console.log(data)
    })

    return () => {
      return socket.close()
    }
  })
  return <>{element}</>
}
