const {createClient} = require ('redis')
const client = createClient()



const startRedis = async () =>{
    try{
        await client.connect()
        console.log('Successfully connected to redis')
    }catch(error){
        client.on('error', (err) => console.log(`Unable to connect to ${error}`))
    }
}
startRedis()

module.exports = client