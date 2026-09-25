import axios from "axios";
const api= axios.create({
    baseURL:"http://localhost:5000/api",
    headers:{
        "Content-Type":"application/json",
    },
});

api.interceptors.request.use((config)=>{
 //we first set the token in the local storeage when we call it set 
 //and when the api uses it get the token form locak storage
    const token=localStorage.getItem("token");
    if(token){
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config;
})

export default api;