import React, { useEffect } from 'react'
import axios from "axios";
import {useSelector} from "react-redux";

const useGetMessages = () => {
    const {selectedUser} = useSelector(store=>store.user);
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:8080/api/v1/message/${selectedUser?._id}`);
            } catch (error) {
                console.log(error);
            }
        }
        fetchMessages();
    }, [selectedUser?._id]);
}

export default useGetMessages