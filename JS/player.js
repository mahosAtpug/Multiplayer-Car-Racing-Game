class Player {
    constructor (){

    }
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
           playerCount= data.val();
        });

    }
    updateCount(count){ 
        database.ref("/").update({
            playerCount: count,

        })

    }

    update (name){
        database.ref("player" + playerCount).set({
            name :name,
        })
        
    }
}