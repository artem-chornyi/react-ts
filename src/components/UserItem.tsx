import React, { FC } from 'react';
import { IUser } from '../types/types';


interface UserItemPros {
    user: IUser;
}

const UserList: FC<UserItemPros> = ({user}) => {

    return (
        <div style={{padding: 15, border: '1px solid gray'}}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    )
}

export default UserList;