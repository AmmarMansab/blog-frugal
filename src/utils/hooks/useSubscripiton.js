import { useState } from 'react';
import axios from 'axios';
import {message} from 'antd' 

const useSubscriptionForm = () => {
    const [subscriptionData, setSubscriptionData] = useState({});
    const [isSuccess, setIsSuccess] = useState(null);

    const handleChange = (e) => {
        setSubscriptionData({ ...subscriptionData, [e.target.name]: e.target.value });
        // console.log(subscriptionData, 'sbd');
    };

    const handleSubmit = async (apiEndpoint) => {
        axios.post(`https://server.blog.digiunction.com/api/news/create`, subscriptionData)
            .then(response => {
                console.log(response, 'endpoint....');
                setIsSuccess(true);
                setSubscriptionData({});
                message.success('Subscribe Successfully');
            })
            .catch(error => {
                setIsSuccess(false);
            });
    };

    return { subscriptionData, handleChange, handleSubmit, isSuccess };
};

export default useSubscriptionForm;
