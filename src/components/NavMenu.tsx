import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function NavMenu() {

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 rounded-lg bg-[#050404] hover:border-[2px]">
        <Bars3Icon className='w-8 h-8 text-[#F7F6F6] ' />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen lg:max-w-min -translate-x-1/2 lg:-translate-x-48">
          <div className="w-full lg:w-56 shrink rounded-xl bg-[#F7F6F6] p-4 text-sm font-semibold leading-6 text-zinc-700 shadow-lg ring-1 ring-gray-900/5 ps-6">
            <Link
              to='/'
              className='block p-2 hover:text-[#050404] transition-transform duration-300 ease-in-out transform hover:scale-110'
            >Inicio</Link>
            <Link
              to='/catalogo'
              className='block p-2 hover:text-[#050404] transition-transform duration-300 ease-in-out transform hover:scale-110 '
            >Catalogo</Link>
            <Link
              to='/contacto'
              className='block p-2 hover:text-[#050404] transition-transform duration-300 ease-in-out transform hover:scale-110 '
            >Contactanos</Link>
            <Link
              to='/pedidos'
              className='block p-2 hover:text-[#050404] transition-transform duration-300 ease-in-out transform hover:scale-110 '
            >Pedidos completados</Link>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}