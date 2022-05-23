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
            <div className='w-screen bg-snow grid grid-cols-5 gap-90 p-8 py-20  mx-auto sm:p-10 md:p-16'>
                {users.map((user) =>{
                    return(
                        <article className='rounded-xl h-52 w-64' key={user.id}>
                            <p className='pt-2 pb-7 list-inside subpixel-antialiased relative text-pink text-2xl font-semibold'>{user.username}</p>
                            <p className='pb-4 list-inside text-sm text-blue'>{user.email}</p>
                            <Link to={`/users/${user.id}`} className= 'bg-pink hover:bg-blue text-white font-lighter py-2 px-6 rounded overflow-hidden shadow-lg'>Acessar TodoList</Link>
                        </article>
                    )
                })}

            </div>
        </div>
    );
    }

export default Dashboard;
