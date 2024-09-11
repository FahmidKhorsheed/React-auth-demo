import React, { useContext } from 'react'
import { AuthContext } from '../state/auth.context'
import { Navigate } from 'react-router-dom'

const ProtectedRoute: React.FC<React.PropsWithChildren> = ({children}) => {
    const {user} = useContext(AuthContext)
    
    if(!user) {
        return <Navigate to="/auth" />
    }

    return  <>{children}</>
  
}

export default ProtectedRoute