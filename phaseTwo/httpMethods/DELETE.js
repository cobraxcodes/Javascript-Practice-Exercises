// syntax
const del = async(URL) =>{
    try{
        const res = await fetch(URL,{
            method: 'DELETE'
        })
        if(!res.ok){
            throw new Error (`Server unreachable ${res.status}`)
        }
        console.log(`Item successfully deleted`)
    }catch(error){
        console.error(`Unable to delete, ${error.message} \n Stack Trace: ${error.stack}`)
    }
}
del('URL OF THE SPECIFIC INFO I AM TRYING TO DELETE')