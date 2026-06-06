import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useInstance from '../../../Hooks/useInstance';
import { MdAdminPanelSettings, MdOutlineAdminPanelSettings } from 'react-icons/md';
import Swal from 'sweetalert2';

const UsersManagement = () => {
    const instance = useInstance()
    //Todo Transtack querey using load users data in db;
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await instance(`/users`);
            return res.data
        }
    })
    //? User role sellected;
    const handlerAdminMakeRemove = (user, roleInfo) => {
        // console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to make ${user.displayName} an admin?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                instance.patch(`/users/${user._id}`, roleInfo)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.modifiedCount) {
                            refetch()
                            Swal.fire({
                                title: "Confarm!",
                                text: `Done ${user.displayName} has been admin`,
                                icon: "success"
                            });
                        }
                    })
            }

        });

    }
    const handlerAdmin = (user) => {
        const roleInfo = { role: 'admin' }
        handlerAdminMakeRemove(user,roleInfo)
    }
    const handlerRemove = (user) => {
        const roleInfo = { role: 'user' }
        handlerAdminMakeRemove(user,roleInfo)
    }
    return (
        <div>
            <h2 className="text-4xl">Manage users {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin Actions</th>
                            <th>Other Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr key={index}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {/* Photo + name */}
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user?.photoURL}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user?.displayName}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td className={`${user.role === 'rider' ? 'text-green-600' : ''}`}>{user.role}</td>
                            <td>
                                {user.role === 'admin' ?
                                    <button onClick={()=>handlerRemove(user)} className="btn btn-ghost btn-xs text-3xl text-red-400"><MdOutlineAdminPanelSettings /></button>
                                    :
                                    <button onClick={() => handlerAdmin(user)} className="btn btn-ghost btn-xs text-3xl text-green-600"><MdAdminPanelSettings /></button>
                                }

                            </td>
                        </tr>)}


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default UsersManagement;