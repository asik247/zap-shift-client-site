import axios from "axios"
import { useEffect } from "react"
import useAuth from "./useAuth"
const instance = axios.create({
    baseURL: "http://localhost:3000/",
})
const useInstance = () => {
    const { user, logOutUsers } = useAuth()
    useEffect(() => {
        //! request interceptors;
        const requestInterceptor = instance.interceptors.request.use((config) => {
            if (user?.accessToken) {
                config.headers.Authorization = `Bearer ${user?.accessToken}`
            }
            return config
        }, (err) => {
            return Promise.reject(err)
        })
        //! response interceptors;
        const responseInterceptor = instance.interceptors.response.use((response) => {
            return response
        }, (err) => {
            const status = err.response?.status;
            if (status === 401 || status === 403) {
                logOutUsers()
                .then(()=>{
                    console.log('you log out');
                }).catch(err=>{
                    console.log(err);
                })
            }
            return Promise.reject(err)
        })
        //? Clear insterceptors;
        return () => {
            instance.interceptors.request.eject(requestInterceptor)
            instance.interceptors.response.eject(responseInterceptor)
        }
    }, [user,logOutUsers])
    return instance
}
export default useInstance