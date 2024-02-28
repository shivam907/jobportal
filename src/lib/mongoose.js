import mongoose from 'mongoose';

let isConnected = false;
export const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  if(isConnected) return console.log('=> using existing database connection');

  try {
    await mongoose.connect("mongodb+srv://shivam:1234@cluster0.abe5jav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    isConnected = true;
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error)
  }
}