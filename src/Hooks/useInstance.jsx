import axios from "axios"
import { useEffect } from "react"
import useAuth from "./useAuth"
const instance = axios.create({
    baseURL: "http://localhost:3000/",
})
const useInstance = () => {
    const { user } = useAuth()
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
        return () => {
            instance.interceptors.request.eject(requestInterceptor)
        }
    }, [user])
    return instance
}
export default useInstance