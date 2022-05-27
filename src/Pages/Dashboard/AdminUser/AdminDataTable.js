import React from 'react';

const AdminDataTable = ({ user }) => {
    const { email } = user;

    const handleMakeAdmin = () => {
        console.log('clicked');

        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (


        <tr>
            <th>1</th>
            <td className='font-bold'> {email} </td>
            <td>
                <button onClick={handleMakeAdmin} class="btn btn-xs font-bold text-black bg-gradient-to-r from-secondary to-primary"> Make Admin </button>
            </td>
            <td>
                <button class="btn btn-xs font-bold text-black bg-gradient-to-r from-secondary to-primary"> Remove </button>
            </td>
        </tr>


    );
};

export default AdminDataTable;