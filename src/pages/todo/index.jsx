import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom'
import api from '../../services/api';
import Header from '../../components/header';

function Todo(){
    const { id } = useParams();
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        async function loadTodo(){
            await api.get(`/users/${id}/todos`)
            .then((response)=>{
                //console.log(response.data);
                setTodos(response.data.slice(0,5))
                setLoading(false);
            })
            .catch(()=>{
                console.log('usuário não encontrado!')
            })
        }
        loadTodo();

        return () => {
            console.log("Componente desmontado")
        }
    })

    if(loading){
        return(
            <div className='text-2xl'>
                <h2>Carregando ToDo...</h2>
            </div>
        )
    }



    return(
        <div className='flex tracking-wider'>
            <Header />
            <div className='w-screen bg-snow'>
            <h1 class='text-4xl mb-4'>TODO LIST</h1>
            <input class="shadow appearance-none border border-blue rounded w-96 py-1 px-4 mr-2" placeholder="Adicionar um novo Todo"/>
            <button class="flex-no-shrink p-1 border-2 rounded border-pink hover:text-blue">Adicionar</button>
                {todos.map((todo) =>{
                    return(
                        <article key={todo.id}>
                            <p className='pb-5 list-inside'>{todo.title}</p>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Todo;