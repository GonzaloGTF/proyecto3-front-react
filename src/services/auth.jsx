import UserContext from "../UserContext"
import { useCallback, useContext } from "react"

export function fetchService({ form }) {

    const { setUser, setError, user } = useContext(UserContext)

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

        fetch("https://p01--proyecto3-back-nest--k4bvp5frjj2w.code.run/auth/login", data)
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
            .catch(e => console.log(e))
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

        fetch("https://p01--proyecto3-back-nest--k4bvp5frjj2w.code.run/users/register", data)
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


    //update User
    const handleEdit = useCallback((e) => {
        e.preventDefault()

        if (form !== "") {
            const id = user._id
            let data = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ form, id })
            }

            fetch("https://p01--proyecto3-back-nest--k4bvp5frjj2w.code.run/users/update", data)
                .then(res => res.json())
                .then(res => {
                    if (res._id) {
                        setUser(res)
                    }
                    else {
                        setError(res.message)
                    }
                })
                .catch(e => console.log(e))
        }
        else {
            setError("Edite algun dato")
        }
    }, [form])

    return { handleLogin, handleRegister, handleEdit }
}


