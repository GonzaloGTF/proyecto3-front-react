import UserContext from "../UserContext"
import { useCallback, useContext } from "react"

export function fetchService({ form }) {

    const { setUser, setError } = useContext(UserContext)

    //Comprobacion Login
    const handleLogin = useCallback((e) => {
        e.preventDefault()
        const { email, password } = form

        fetchLogin(email, password, setUser, setError)

    }, [form])



    const fetchLogin = (email, password, setUser, setError) => {

        let data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        }

        fetch("http://localhost:3000/auth/login", data)
            .then(res => res.json())
            .then(res => {
                if (res.user) {
                    setUser(res.user)
                    setError(null)
                    localStorage.setItem("token", res.access_token)
                }
                else {
                    setError(res.message)
                }
            })
    }

    //Register + login
    const handleRegister = useCallback((e) => {
        e.preventDefault()

        const { nombre, apellidos, email, telefono, password } = form

        let data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, apellidos, email, telefono, password })
        }

        fetch("http://localhost:3000/users/register", data)
            .then(res => res.json())
            .then(res => {

                if (res._id) {
                    fetchLogin(email, password, setUser, setError)
                }
                else {
                    setError(res.message)
                }

            })
            .catch(e => console.log(e))
    }, [form])

    return { handleLogin, handleRegister }
}


