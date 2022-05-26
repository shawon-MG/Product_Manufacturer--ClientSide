import React, { useEffect, useState } from 'react';
import Myorder from './Myorder';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const MyOrders = () => {

    // const [deleteOrder, setDeleteOrder] = useState();


    // const [myOrders, setMyOrders] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/purchase')
    //         .then((response) => response.json())
    //         .then(data => {
    //             setMyOrders(data);
    //             console.log(data);
    //         })
    // }, [deleteOrder])
    // console.log(deleteOrder);
    const { data: myOrders, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/purchase', {
        method: 'GET'
    })
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
            {
                myOrders?.map(myOrder => <Myorder
                    key={myOrder._id}
                    myOrder={myOrder}
                    // setDeleteOrder={setDeleteOrder}
                    refetch={refetch}
                >
                </Myorder>)
            }
        </div>
    );
};

export default MyOrders;