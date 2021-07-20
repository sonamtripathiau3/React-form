let usserArr=[{
    name:"sonam1",
    email:"abc@gmail.com",
    number:"1234",
    image:"anything"
}
]
const usersReducer = (users = usserArr, action) => {
    if(action.type === 'ADD_USER'){
        users = users.concat(action.data)
    }
    return users
}

export default usersReducer