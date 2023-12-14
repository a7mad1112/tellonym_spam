import mongoose from 'mongoose';
const connectDB = async () => {
  const { DB_URL } = process.env;
  if (!DB_URL) {
    console.log(`Error to connect DB, url not found`);
    return;
  }
  return await mongoose
    .connect(DB_URL)
    .then(() => {
      console.log('DB Connected');
    })
    .catch((err) => {
      console.log(`Error to connect DB, ${err}`);
    });
};

export default connectDB;
