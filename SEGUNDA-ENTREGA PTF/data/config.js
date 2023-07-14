import mongoose from 'mongoose';

export const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://munozmon004:SegundaEntrega@cluster0.0tunwt9.mongodb.net/?retryWrites=true&w=majority");
        console.log('Base de datos Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al levantar la base de datos')
    }
};