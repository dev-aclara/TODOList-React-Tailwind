import { GoTasklist } from 'react-icons/go';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex">
        <div className="first-line w-40 h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink">
             <div className='cursor-pointer duration-500 text-center flex justify-content'> 
              <GoTasklist className='text-white text-2xl m-1.5'/>
              <h1 className='text-white origin-left font-bold text-xl duration-500 py-1'>TodoList</h1>
             </div>
             <Link to="/">
             <FiHome className="text-white text-xl hover:text-blue hover:text-3xl cursor-pointer"/>
             </Link>
        </div>
     </div>
    
  );
}

export default Header;
