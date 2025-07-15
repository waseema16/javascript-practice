
        let rand = Math.random()
        let first,second,third
        if(rand<0.33){
            // 0 0.33 0.66 100
            first = "crazy"
        }
        else if(rand<0.66 && rand>=0.33){
            first = "amazing"
        }
        else{
            first = "fire"
        }
        // lets generate the second word
        rand = Math.random()
        if(rand<0.33){
            // 0 0.33 0.66 100
            second = "engine"
        }
        else if(rand<0.66 && rand>=0.33){
            second = "foods"
        }
        else{
            second = "garments"
        }
        // lets generate the third word
        rand = Math.random()
        if(rand<0.33){
            // 0 0.33 0.66 100
            third = "bros"
        }
        else if(rand<0.66 && rand>=0.33){
            third = "limited"
        }
        else{
            third = "hub"
        }
        console.log(`${first} ${second} ${third}`)

