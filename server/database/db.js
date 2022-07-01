import mongoose from "mongoose";

export const Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-xmrkeva-shard-00-00.exgcjl3.mongodb.net:27017,ac-xmrkeva-shard-00-01.exgcjl3.mongodb.net:27017,ac-xmrkeva-shard-00-02.exgcjl3.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-rz4155-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error while connecting to database', error.message);
    }
}

export default Connection;