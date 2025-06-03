import { createClient } from 'redis'

const client = createClient() // this creates the redis connnection instance 
client.on('error' , (err) => console.log(`Redis connection problem ${err}`)) // listener if there are any issues with connecting to redis

await client.connect() // establishes connection 

