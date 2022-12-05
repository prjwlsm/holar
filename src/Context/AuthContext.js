import { useContext,createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,
         signInWithPopup,
         signInWithRedirect,
         signOut,
         onAuthStateChanged
                            } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext=createContext();

//to wrap logic inside the context
export const AuthContextProvider=({children})=>{

    const [user, setUser]=useState({})

    //sign in
    const googleSignIn=()=>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider)
    }
    
    //sign out
    const logOut=()=>{
        signOut(auth)
    }
    
    useEffect(()=>{
          
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log('user',currentUser)
         });
        
         return ()=>{
            unsubscribe()
         }

    },[])



     return(
        <AuthContext.Provider  value={{googleSignIn,logOut,user}}>
             {children}
        </AuthContext.Provider>
     )
}

export const UserAuth=()=>{

    return useContext(AuthContext)
}