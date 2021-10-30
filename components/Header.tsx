import { SearchIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import { User } from '@firebase/auth'
import { Menu, Transition } from '@headlessui/react'
interface HeaderProps{
    user:User|null
}
const Header = ({user}:HeaderProps) => {
    const [navbarState, setNavbarState] = useState(false)
    const router = useRouter()
    const {signout} = useAuth()
    const handleLogoClick = () => {
        router.push('/')
    }
    const handleSignout = () => {
        signout()
        router.push('/')
    }
    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 2){
                setNavbarState(true)
            }else{
                setNavbarState(false)
            }
        }
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    },[])
    return (
        <div className={`flex py-2 px-8 lg:px-16 justify-between items-center fixed top-0 z-20 w-full transition duration-150 ease-out ${navbarState ? 'bg-black' : 'bg-transparent'}`}>
            {/* Icon */}
            <div className="relative w-44 h-20 cursor-pointer" onClick={handleLogoClick}>
                <Image src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-235c7.appspot.com/o/assests%2Fnetflix.png?alt=media&token=d435cba5-fecc-4e68-9eb0-d701467f0493" layout="fill"
                objectFit="contain" />
            </div>
            {/* Right */}
            <div className="flex items-center space-x-10">
                {user ? <><input type="text" placeholder="Search" className="py-2 px-4 bg-[#222] rounded-sm text-white outline-none"/>
                <SearchIcon className="h-6 text-white cursor-pointer" />
               
               

                <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <div className="relative w-12 h-12 cursor-pointer">
                    <Image src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-235c7.appspot.com/o/assests%2Favatar1.png?alt=media&token=1bf82a36-0849-42f9-85e4-e92623ee633e" layout="fill"/>
                </div>
                 
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-black divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`group flex rounded-md items-center w-full px-2 py-2 text-white font-bold text-xl`} onClick={handleSignout}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item></div>
                        </Menu.Items></Transition></Menu>
                </>:<button className="px-4 py-2 bg-red-600 rounded-sm text-white" onClick={()=>router.push('/signin')}>Sign In</button>}
            </div>
        </div>
    )
}

export default Header
