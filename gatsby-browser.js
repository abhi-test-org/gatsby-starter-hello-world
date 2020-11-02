const React = require("react")
const io = require("socket.io-client")

function PreviewProvider({ children }) {
  React.useEffect(() => {
    const socket = io()

    socket.on("connect", () => {
      console.log("Connected")
    })

    socket.on("reload", () => {
      window.location.reload()
    })

    return () => {
      return socket.close()
    }
  })

  return <>{children}</>
}

exports.wrapRootElement = ({ element }) => {
  return <PreviewProvider>{element}</PreviewProvider>
}
