import { SiTodoist } from 'react-icons/si';

function Header() {
  return (
    <div className="flex">
        <div className="first-line w-32 h-screen bg-pink">
             <div className='cursor-pointer duration-500 text-center flex justify-content py-5'> 
              <SiTodoist className='text-white text-2xl m-1.5'/>
              <h1 className='text-white origin-left font-bold text-xl duration-500 py-1'>TodoList</h1>
             </div>
        </div>
     </div>
    
  );
}

export default Header;
