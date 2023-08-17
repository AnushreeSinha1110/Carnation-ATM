import {Outlet, Navigate} from 'react-router'

const PrivateRotues = () => {
    let auth = {'token': false}
    
    return(
        auth.token ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRotues