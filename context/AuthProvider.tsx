import {onIdTokenChanged,getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,getIdToken,User,signOut,UserCredential} from 'firebase/auth'
import { createContext,useContext,useState,useEffect } from "react"
import app from '../firebase'
import nookies from 'nookies'
interface AuthContextProps{
    user:User|null
    signin:(email:string,password:string) => Promise<UserCredential>
    signup:(email:string,password:string) => Promise<UserCredential>
    signout:() => void
}
const AuthContext = createContext({} as AuthContextProps)

const AuthProvider = ({children}:any) => {
    const auth = getAuth(app)
    const signin = (email:string,password:string) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signup = (email:string,password:string) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signout = () => {
        signOut(auth)
    }
    const [user,setUser] = useState<User|null>(null)
    useEffect(()=>{
        
        onIdTokenChanged(auth,async(res)=>{
            if(res){
            
               const token = await getIdToken(res)
               setUser(res)
               nookies.set(undefined,'token',token,{path:'/'})
            }else{
                setUser(null)
                nookies.set(undefined,'token','',{path:'/'})
            }
        })
    },[])
    return (
        <AuthContext.Provider value={{signin,signup,user,signout}}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider


export const useAuth = () => useContext(AuthContext)