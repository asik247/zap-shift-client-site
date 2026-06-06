import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useInstance from '../../../Hooks/useInstance';
import { MdAdminPanelSettings, MdOutlineAdminPanelSettings } from 'react-icons/md';

const UsersManagement = () => {
    const instance = useInstance()
    //Todo Transtack querey using load users data in db;
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await instance(`/users`);
            return res.data
        }
    })
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
                        {users.map((user, index) => <tr>
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
                                    <button className="btn btn-ghost btn-xs text-3xl"><MdOutlineAdminPanelSettings /></button>
                                    :
                                    <button className="btn btn-ghost btn-xs text-3xl"><MdAdminPanelSettings /></button>
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