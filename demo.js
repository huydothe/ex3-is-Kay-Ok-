async function onMyBirthday(isKayOk){
    if(isKayOk){
        return 2;
    }
    return new Error("I'm sad");
}

async function checkSick(){
    try{
        let result = await onMyBirthday(false);
        console.log(`I have ${result} cakes !!`)
    }catch (error){
        console.log(error.message);
    }finally {
        console.log("Party");
    }
}

checkSick()