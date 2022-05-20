import { useEffect, useState } from 'react';
import api from '../../services/api';
import Header from '../../components/header';
import { Link } from 'react-router-dom';

// URL usuários: https://jsonplaceholder.typicode.com/users
function Dashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        async function loadUsers(){
            const response = await api.get('/users')
            //console.log(response.data)
            setUsers(response.data)
            setLoading(false);
        }
        loadUsers();
    }, [])

    if(loading){
        return(
            <div className='text-2xl'>
                <h2>Carregando usuários...</h2>
            </div>
        )
    }

    return (
        <div className='flex tracking-wider'>
            <Header />
            <div className='w-screen bg-snow grid grid-cols-4 gap-20 px-8 py-8'>
                {users.map((user) =>{
                    return(
                        <article key={user.id}>
                            <p className='pb-5 text-xl list-inside subpixel-antialiased relative text-pink'>{user.username}</p>
                            <p className='pb-4 list-inside'>{user.email}</p>
                            <Link to={`/users/${user.id}`} className= 'bg-pink hover:bg-blue text-white font-lighter py-1.5 px-6 rounded-full'>Acessar TodoList</Link>
                        </article>
                    )
                })}

            </div>
        </div>
    );
    }

export default Dashboard;
