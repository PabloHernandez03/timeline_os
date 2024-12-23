import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <>

      <Link
        to='/'
        className='block p-2'
      >
        <img 
          className="transition-transform duration-300 ease-in-out transform hover:scale-110" 
          src="/logo.svg" 
          alt="Logotipo" 
        />
      </Link>

    </>

  )
}
