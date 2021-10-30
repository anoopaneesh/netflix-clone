import { SearchIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import { User } from '@firebase/auth'
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
                <div className="relative w-12 h-12 cursor-pointer" onClick={handleSignout}>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-235c7.appspot.com/o/assests%2Favatar1.png?alt=media&token=1bf82a36-0849-42f9-85e4-e92623ee633e" layout="fill"/>
                </div></>:<button className="px-4 py-2 bg-red-600 rounded-sm text-white" onClick={()=>router.push('/signin')}>Sign In</button>}
            </div>
        </div>
    )
}

export default Header
