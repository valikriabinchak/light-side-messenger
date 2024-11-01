import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const [ isReg, setIsReg ] = useState( false );
    const [ firstName, setFirstName ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );

    const navigate = useNavigate();

    const toggleForm = () => setIsReg( ( value ) => !value );

    const handleRegister = async () => {
        try {
            const response = await fetch( "http://localhost:3002/user/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify( { firstName, email, password } ),
            } );

            if ( response.ok ) {
                toggleForm(); // Переключення на форму входу після успішної реєстрації
            } else {
                const error = await response.json();
                alert( `Error: ${ error.message }` );
            }
        } catch ( err ) {
            console.error( "Registration failed:", err );
            alert( "Registration failed. Try again later." );
        }
    };

    const handleLogin = async () => {
        try {
            const response = await fetch( "http://localhost:3002/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify( { email, password } ),
            } );

            if ( response.ok ) {
                const data = await response.json();
                localStorage.setItem( "token", data.token );
                localStorage.setItem( "email", email );
                localStorage.setItem( "imagePath", data.imagePath );

                navigate( "/messenger" ); // Перенаправлення до месенджера після входу
            } else {
                const error = await response.json();
                alert( `Error: ${ error.message }` );
            }
        } catch ( err ) {
            console.error( "Login failed:", err );
            alert( "Login failed. Try again later." );
        }
    };

    return {
        isReg,
        setFirstName,
        setEmail,
        setPassword,
        toggleForm,
        handleRegister,
        handleLogin
    };
};
