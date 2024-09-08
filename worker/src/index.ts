import { createClient } from "redis";

const client=createClient()

async function main(){
    await client.connect()

    while(1){
        //we do brpop we popping means when the user summit then it sends the
        const response=await client.brPop("submission",0)
        await new Promise((resolve)=>
            //run the docker exec
            setTimeout(resolve,1000)

        )
        console.log("user submiited")
    }
}
main()