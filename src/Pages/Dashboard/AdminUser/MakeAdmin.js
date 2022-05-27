import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const MakeAdmin = () => {

    const { data: allUsers, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/all-users', {
        method: 'GET'
    })
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1> Make an admin from here </h1>
            <h1> All users length : {allUsers.length}</h1>
        </div>
    );
};

export default MakeAdmin;