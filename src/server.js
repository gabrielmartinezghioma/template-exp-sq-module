import app from "./app.js"

const port = process.env.PORT || 8080

function server() {
  try {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
      console.log(`App listening on http://localhost:${port}`);
    })
  }
  catch (e) {
    console.error('Error occurred while starting the server:', e.message);
  }
}

server()