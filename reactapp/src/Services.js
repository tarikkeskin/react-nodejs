
/**
 * 
 * This service system uses fetch API to make the API calls !!
 * 
 */

export async function getAllUsersServices() {

    try{
        const response = await fetch('/account/list'); // !-> '/users' '/account/list'
        return await response.json();
    }catch(error) {
        return [];
    }
    
}


export async function createUserServices(data) {
    try{
        const response = await fetch('/account/addaccount', {  // !-> '/user'  '/account/addaccount'
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        return await response.json();
    }
    catch(e){
        console.log(e);
    }
}

export async function deleteUserServices(id){
    const response = await fetch('/account/delete/'+id, {  // !-> '/user'  '/account/addaccount'
        method: 'DELETE',
        headers: {'Content-Type': 'application/json',
        'Accept': 'application/json'
                        },
        body: JSON.stringify()
    });

    return await response.json();
}

export async function updateServices(id,firstName,email){

    const response = await fetch('/account/update/'+id+'*'+firstName+'*'+email,{
        
        method: 'PUT',
        headers: {'Content-Type': 'application/json',
        'Accept': 'application/json'
                        },
        body: JSON.stringify()
    });

    return await response;

}


