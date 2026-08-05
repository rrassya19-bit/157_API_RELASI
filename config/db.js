const db = require ('../models');

async function connectDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log('Database connected successfully');

        await db.sequelize.sync({ alter: true });
        console.log('Database synchronized');

    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
}

module.exports = connectDatabase;