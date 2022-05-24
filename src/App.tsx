import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import UserItem from './components/UserItem';
import { IUser } from './types/types';
import axios from 'axios';
import List from './components/List';

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetchUsers()
    }, [])
    
    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)

        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            <Card
                width='200px'
                height='200px'
                variant={CardVariant.outline}
                onClick={(num) => console.log(num,'test clik')}
            >
                <button>Click</button>
            </Card>
            {/* <UserList users={users} /> */}
            <List
                items={users}
                renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
            />
        </div>
    );
}

export default App;
