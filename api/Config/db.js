import mongoose from "mongoose";
import colors from "colors";

const Mongodb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB_URL);
        console.log(`Mongo db is read to store data ${mongoose.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(error)
    }
};

export default Mongodb;