import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
    const { token, redirectTo, children } = props
    return token ? children : <Navigate to={redirectTo}/>
}

/*
<ProtectedRoute>
    <Component />   //access through React.children
</ProtectedRoute>
*/