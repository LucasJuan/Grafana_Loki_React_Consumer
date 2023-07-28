import React, { useState } from 'react';
import lokiAxios from './axiosConfig';

const Logs = () => {
    const [logMessage, setLogMessage] = useState('');

    const handleClick = async () => {
        try {
            const response = await lokiAxios.get('https://jsonplaceholder.typicode.com/posts/1');
            setLogMessage(response.data.title);
        } catch (error) {
            setLogMessage('Error occurred');
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Call the API</button>
            <div>Log Message: {logMessage}</div>
        </div>
    );
};

export default Logs;
