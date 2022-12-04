import axios from "axios";
import { response } from "express";
const API_URL='/api/users/'

//register user
const register =async (userData)=>{
    const response =await axios.post(API_URL,userData)
    if(response.data){
        localStorage.setItem("user",JSON.stringify(response.data))
    }
    return response.data
}
const login =async(userData)=>{
    const response=await axios.post(API_URL + 'login',userData)
if(response.data){
    localStorage.setItem('user',JSON.stringify(response.data))
}
return response.data
}

const logout=()=>{
    localStorage.removeItem.logout()
}
const authService={
    register,logout
}
export default authService