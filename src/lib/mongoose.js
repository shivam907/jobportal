import mongoose from 'mongoose';

let isConnected = false;
export const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  if(isConnected) return console.log('=> using existing database connection');

  try {
    await mongoose.connect("mongodb+srv://shivam:1234@user.zgoszrf.mongodb.net/?retryWrites=true&w=majority");
    isConnected = true;
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error)
  }
}