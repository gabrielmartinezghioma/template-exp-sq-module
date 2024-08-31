import app from "./app.js";
import sequelize from "./config/DB/conection.js";

const PORT = process.env.PORT || 8080;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection has been established successfully.');

    await sequelize.sync();
    console.log('✅ Database has been synchronized successfully.');

    app.listen(PORT, () => {
      console.log(`✅ App listening on port ${PORT}`);
      console.log(`✅ http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error('❌ Error occurred', error.message);
    process.exit(1);
  }
}

startServer();
