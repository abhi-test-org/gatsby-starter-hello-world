const React = require("react")
const io = require("socket.io-client")

function PreviewProvider({ children }) {
  const [showReloadBar, setShowReloadBar] = React.useState(false)

  React.useEffect(() => {
    const socket = io()

    socket.on("connect", () => {
      console.log("Connected")
    })

    socket.on("reload", () => {
      setShowReloadBar(true)

      setTimeout(() => {
        window.location.reload()
      }, 5000)
    })

    return () => {
      return socket.close()
    }
  })

  return (
    <>
      {showReloadBar && (
        <div
          style={{
            position: `fixed`,
            width: `100%`,
            top: 0,
            left: 0,
            backgroundColor: `purple`,
            color: `white`,
            textAlign: `center`,
          }}
        >
          You Preview is reloading...
        </div>
      )}

      {children}
    </>
  )
}

exports.wrapRootElement = ({ element }) => {
  return <PreviewProvider>{element}</PreviewProvider>
}
