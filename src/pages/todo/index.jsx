import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom'
import api from '../../services/api';
import Header from '../../components/header';
import Lista from '../../components/lista/lista';
import { IoIosAdd } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';

function Todo(){
    const { id } = useParams();
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() =>{
        async function loadTodo(){
            await api.get(`/users/${id}/todos`)
            .then((response)=>{
                //console.log(response.data);
                setTodos(response.data.slice(0,7))
                setLoading(false);
            })
            .catch(()=>{
                console.log('usuário não encontrado!')
            })
        }
        loadTodo();
    })

    if(loading){
        return(
            <div className='text-2xl'>
                <h2>Carregando ToDo...</h2>
            </div>
        )
    }

    const handleGetInput = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) =>{
        setLoading(true);
        e.preventDefault()

        if (!text) {
            alert('Você precisa digitar alguma tarefa 🙁')
        }
        else{
            const newItem = {
            userId: id,
            id: todos.length + 1,
            title: text,
            completed: false,
        }
        setItems([newItem, ...items])
        setLoading(false);
        setText("")
        }
    }

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id))
    }

    return(
        <div className='flex'>
            <Header />

            <div className='w-screen bg-snow'>
            <h1 className='text-5xl mb-4 font-medium uppercase mt-10 tracking-widest text-blue'>Todo List</h1>

            <form className='flex items-center justify-center mt-4 pb-5' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="text"
                    placeholder="Adicionar uma nova tarefa"
                    className="w-64 rounded-lg shadow appearance-none border text-blue py-1 pl-5 pr-10 sm:w-96 placeholder:italic placeholder:text-slate-400"
                    autoComplete="off"
                    value={text}
                    onChange={handleGetInput}
                />
                <button className='text-2xl'>
                    <IoIosAdd className='text-blue' />
                </button>
            </form>
    
                {todos.map((todo) =>{
                    return(
                        <article key={todo.id} state={todo.completed} className="sm:max-w-xl md:mx-auto">
                            <ul className="bg-pink mx-5 rounded-lg mt-2 list flex items-center justify-between border-b cursor-pointer py-1 pr-5 pl-2">
                            <input 
                            type="checkbox"
                            checked={todo.completed}
                            className='pl-5 form-check-input appearance-none h-3 w-3 bg-white checked:bg-blue focus:outline-none transition duration-200 mt-1 align-top float-left cursor-pointer rounded-sm'/>
                            <li className='text-white px-5 py-1 tracking-wider border-fuchsia-300'>
                                 {todo.title}
                            </li>
                            <button onClick={() => deleteItem(id)}>
                                <AiOutlineDelete className='text-white text-2xl opacity-25' />
                            </button>
                            </ul>  
                        </article>
                    )
                })}
                <Lista 
                items={items}
                deleteItem={deleteItem}
                 />
            </div>
        </div>
    )
}

export default Todo;