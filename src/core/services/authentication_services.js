export const login = (username, password) => {
    if(username.toLowerCase() === 'admin'){
        if (password === '123456'){
            return {status: 200, user:{username, token: "abc", fullname: "Administrator"}}
        } else {
            return {status: 404, errorString: 'Username and password are not match'}
        }
    }
    return {status: 404, errorString: "Username is not existed"}
}