import  { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loaderUser = useLoaderData();

    const [users, setUsers] = useState(loaderUser)

    const handeldeleteUser = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-omega-ecru-61.vercel.app/${id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'Application/json'
                    }

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingItems = users.filter(user => user._id !=id);
                            setUsers(remainingItems);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })



            }
        });
    }


    return (
        <div className='w-11/12 mx-auto my-5 py-5'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Create Time</th>
                            <th>Last Sign In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users && users.map(user => <tr key={user._id} className="bg-base-200">
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createTime}</td>
                                <td>{user.lastSignInTime}</td>
                                <td className='gap-1 flex'>
                                    <button className='btn btn-success'>edit</button>
                                    <button onClick={() => handeldeleteUser(user._id)} className='btn btn-warning'>X</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;