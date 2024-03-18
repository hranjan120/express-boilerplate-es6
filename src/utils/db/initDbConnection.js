import mongoose from 'mongoose';

export default async function initDbConnection() {
    try {
        await mongoose.connect(process.env.DB_URL);
        return true;
    } catch (error) {
        return error;
    }
}

mongoose.connection.on('connected', () => {
    console.log('DB Connected On:', Math.floor(Date.now() / 1000));
    console.log('Mongoose default connection open');
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose default connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('DB Disconnected On:', Math.floor(Date.now() / 1000));
    console.log('Mongoose default connection disconnected');
});

process.on('exit', () => {
    mongoose.disconnect();
    console.log('Mongoose default connection disconnected through app termination');
});
