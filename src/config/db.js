import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose
        .connect(`mongodb+srv://${process.env.DB_user}:${process.env.DB_password}@${process.env.Cluster_adress}/prova`) 
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.log(error));
};

export default connectDB;