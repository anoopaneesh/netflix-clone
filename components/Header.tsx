import Image from 'next/image'
import { useEffect, useState } from 'react'
const Header = () => {
    const [navbarState, setNavbarState] = useState(false)
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
            <div className="relative w-44 h-20">
                <Image src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-235c7.appspot.com/o/assests%2Fnetflix.png?alt=media&token=d435cba5-fecc-4e68-9eb0-d701467f0493" layout="fill"
                objectFit="contain" />
            </div>
            {/* Right */}
            <div>
                <button className="px-4 py-2 bg-red-600 rounded-sm text-white">Sign In</button>
            </div>
        </div>
    )
}

export default Header
