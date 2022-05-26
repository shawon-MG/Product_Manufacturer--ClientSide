import React, { useEffect, useState } from 'react';
import Myorder from './Myorder';

const MyOrders = () => {

    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/purchase')
            .then((response) => response.json())
            .then(data => {
                setMyOrders(data);
                console.log(data);
            })
    }, [])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
            {
                myOrders?.map(myOrder => <Myorder
                    key={myOrder._id}
                    myOrder={myOrder}
                >
                </Myorder>)
            }
        </div>
    );
};

export default MyOrders;