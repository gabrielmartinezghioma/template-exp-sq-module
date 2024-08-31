import app from "./app.js"
import sequelize from "./DB/conection.js"

const PORT = process.env.PORT || 8080

async function server() {
  try {
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })

    // await sequelize.authenticate();
    console.log('Connection has been established successfully.');

  } catch (e) {
    console.error('Error occurred', e.message);
  }
}

server()