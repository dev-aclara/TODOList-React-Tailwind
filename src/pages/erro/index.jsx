import { Link } from 'react-router-dom';

function Erro (){
    return(
        <div className='text-2xl'>
            <h1 className='text-8xl' >404</h1>
            <h2>Essa página não existe</h2>
            <Link to='/' className='bg-pink text-white text-xl py-0.5 px-3 rounded-full'>Veja todos os usuários</Link>
        </div>
    )
}

export default Erro;