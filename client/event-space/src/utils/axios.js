import axios from "axios";

const api= axios.create({
    baseURL:"http://localhost:5000/api",
    headers:{
        "Content-Type":"application/json",
    },
});

api.interceptors.request.use((config)=>{
 //we first set the token coming form the api in the local storage when we call we set it in the local storage in the backend
 //and when the api uses it get the token form local storage
    const token=localStorage.getItem("token");
    if(token){
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config;
})

export default api;

//now we dont have to do all these above step when we call or get api the all above tasks will be done automatically
// make the request with the baseurl and the header