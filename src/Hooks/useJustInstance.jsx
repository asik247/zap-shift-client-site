import axios from 'axios';
import React from 'react';
const justInstance = axios.create({
     baseURL: "http://localhost:3000/",
})
const useJustInstance = () => {
    return justInstance
};

export default useJustInstance;