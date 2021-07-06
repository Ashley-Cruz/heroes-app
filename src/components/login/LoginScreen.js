import React, { useContext } from 'react'
// import { Link } from 'react-router-dom';
import { AuthContext } from './../../auth/AuthContext';
import { types } from './../../types/types';

export const LoginScreen = ({history}) => { //Este history lo en Components, en la seccion LoginScreen - props

    const {dispatch} = useContext(AuthContext)

    const handleLogin = () => {
        // history.push('/');
        // history.replace('/'); //Al momento de estar en Login y darle ingresar, pasaremos a Marvel, y al darle atrás, ya no nos regresará al Login
        
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Nayelli'
            }
        })

        history.replace(lastPath);

    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
            {/* <Link to="/" className="btn btn-primary">Login</Link> */} 
        </div>
    )
}
