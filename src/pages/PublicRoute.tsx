import React, { useContext } from 'react'
import { AuthContext } from '../state/auth.context'
import { Navigate } from 'react-router-dom'

const PublicRoute: React.FC<React.PropsWithChildren> = ({children}) => {
    const {user} = useContext(AuthContext)
    
    if(user) {
        return <Navigate to="/" />
    }

    return  <>{children}</>
  
}

export default PublicRoute