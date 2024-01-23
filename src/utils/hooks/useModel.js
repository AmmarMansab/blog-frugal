// useModel.js
import { useState } from 'react';

const useModel = () => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const showModal = () => {
        setVisible(true);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 3000);
    };
    const handleCancel = () => {
        setVisible(false);
    };
    return { showModal, handleOk, handleCancel, loading, visible,setVisible };
};

export default useModel;
