import mongoose from 'mongoose'



const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL_ONLINE_COMPILER);
        console.log(`Connected to Mongodb Database ${conn.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`Error in MongoDB Connection ${error} `.bgRed.white)
    }
}


export default connectDB;