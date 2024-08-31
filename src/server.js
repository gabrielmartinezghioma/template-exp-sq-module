import app from "./app.js"

const PORT = process.env.PORT || 8080

function server() {
  try {
    app.listen(PORT);
    console.log(`👉 Server running on port ${PORT}`);
    console.log(`👉 Link http://localhost:${PORT}`);
  } catch (error) {
    console.log(error)
  }
}

server()