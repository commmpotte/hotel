import { useContext, createContext, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth, db } from '../lib/firebase'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'

const userContext = createContext()
export const useAuth = () => {
  return useContext(userContext)
}

const UserAuthContext = ({ children }) => {
  const [verifyemail, setverify] = useState()
  const [currentuser, setuser] = useState()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setuser(user)
      setverify(user.emailVerified)
    } else {
    }
  })

  //Информация профиля
  const profileInformation = (profile) => {
    return addDoc(collection(db, 'profile'), profile)
  }

  // Логин логика
  const UserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  //Лог аут логика
  const logout = () => {
    return signOut(auth)
  }

  // Сайнап юзера
  const SignUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const value = {
    SignUp,
    currentuser,
    UserLogin,
    logout,
    profileInformation,
    verifyemail,
  }
  return <userContext.Provider value={value}>{children}</userContext.Provider>
}

export default UserAuthContext
