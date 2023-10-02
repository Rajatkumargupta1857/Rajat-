import {FaSearch} from  'react-icons/fa'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header  className='bg-slate-200 shadow-md'>
      <div className='flex justify-between item-center max-w-6xl max-auto p-3'>

       <Link to='/'>
       
      <h1 className='font-bolt text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Real</span>
        <span className='text-slate-500'>EstateXpress</span>
      </h1>

      </Link>   
      <form className='bg-slate-300 p-3 rounded-lg flex items-center'>
        <input type="text" placeholder='search...' className="bg-transparent focus:outline-none w-24 sm:w-64"  />
        <FaSearch className='text-slate-500'/>
      </form>

      <ul className='flex gap-4'>
        <Link to='/'>
        <li className='hidden sm:inline hover:underline'>Home</li>
        </Link>
        <Link to='/About'>
        <li className='hidden sm:inline hover:underline'>About</li>
        </Link>
        <Link to='/Sign-In'>
        <li className=' sm:inline hover:underline'>Sign In</li>
        </Link>
      </ul>
      </div>
     
    </header>
  )
}

export default Header 