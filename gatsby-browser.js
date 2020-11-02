const React = require("react")
const io = require("socket.io-client")

function PreviewProvider({ children }) {
  React.useEffect(() => {
    const socket = io()

    socket.on("reload", data => {
      console.log(data)
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
