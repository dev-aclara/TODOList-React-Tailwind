import { AiOutlineDelete } from 'react-icons/ai';

const Lista = ({items,  deleteItem}) => {

  return (
    <article className="sm:max-w-xl md:mx-auto">
      {items.length !== 0 && (
        <ul>
          {items.map(({ id, title }) => (
            <article key={id}  className="sm:max-w-xl md:mx-auto">
            <ul className="bg-pink mx-5 rounded-lg mt-2 list flex items-center justify-between border-b cursor-pointer py-1 pr-5 pl-2">
            <input 
            type="checkbox"
            className='pl-5 form-check-input appearance-none h-3 w-3 bg-white checked:bg-blue focus:outline-none transition duration-200 mt-1 align-top float-left cursor-pointer rounded-sm'/>
                <li className='text-white px-5 py-1 tracking-wider border-fuchsia-300'>
                 {title}
                </li>
              <button onClick={() => deleteItem(id)}>
                <AiOutlineDelete className='text-white text-2xl' />
              </button>
            </ul>  
          </article>
          ))}
        </ul>
      )}
    </article>
  )
}

export default Lista