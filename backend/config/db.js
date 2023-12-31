import mongoose from "mongoose";

const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connected!" , conn.connection.host)
    } catch (error) {
        
        console.error("Connection unsuccesfull due to error:", error.message)
        process.exit(1)
    }
}

export default connectDB