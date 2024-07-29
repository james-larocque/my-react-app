import React, { useEffect, useState } from 'react';

const HelloWorld = () => {

    const [message, setMessage] = useState("");

    useEffect(() => {
        const url = '/api/GetHelloWorldMessage';

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const { text } = await response.json();
                console.log(text);
                setMessage(text);
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchData();

    }, []);

    return (
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-4 m-5">
            <p className="text-3xl text-gray-700 font-bold mb-5">
                Welcome!
            </p>
            <p className="text-gray-500 text-lg">
                {message}
            </p>
        </div>

    );
}

export default HelloWorld;