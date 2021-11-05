
/**
 * 
 * This service system uses fetch API to make the API calls !!
 * 
 */

export async function getAllUsers() {

    try{
        const response = await fetch('/users');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createUser(data) {
    try{
        const response = await fetch('/user', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: data})
        });
        return await response.json();
    }
    catch(e){
        console.log(e);
    }
}


