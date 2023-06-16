class Profile{
    constructor(){
        this.clientid='',
        this.clientScret=''
    }
    // https://jsonplaceholder.typicode.com/users For Api
    async getProfile(username){
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
        const profile=await profileResponse.json()
        const todoResponse =await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)
        const todos=await todoResponse.json();
               
        return{
            profile,todos
        }

    }
}