const LS_KEY="users";

function saveUser(user){
    console.log(user);
    let val = JSON.stringify(user); //parse into a JSON string
    console.log(val); //this is the string in JSON
    localStorage.setItem("users", val); //send it to the localstorage
}

function readUsers(){
    //get the values from the localstorage
    let data = localStorage.getItem(LS_KEY);
    if(!data){ //NOT users?
        return []; //creating the array the first registration
    }else{
        let list = JSON.parse(data);
        return list;
    }
}