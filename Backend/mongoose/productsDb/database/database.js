require ('dotenv').config()
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://cobraxcodes:<db_password>@testcluster.gylfdcd.mongodb.net/booksDb?retryWrites=true&w=majority&appName=testCluster'


const connect = async () => {
    try{
        await connect(mongoURI)
        console.log(`Successfully connected to MongoDb Atlas`)
    }catch(error){
        console.error(`Unable to connect to MongoDb Atlas`)
    }
}

const disconnect = async() =>{
    await mongoose.disconnect()
}

module.exports = {connect, disconnect}