import { useForm } from "../../hooks/useForm"
import { fetchService } from "../../services/auth"
import { useContext, useEffect } from "react"
import UserContext from "../../UserContext"

export default function Login({ login, setLogin }) {

    const { form, handleForm } = useForm()
    const { handleLogin } = fetchService({ form })

    const { error, setError } = useContext(UserContext)

    useEffect(() => (
        setError(null)
    ), [])

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-white flex flex-col items-center justify-center rounded-[30px] w-[500px] h-[700px]">
                <h2 className="text-4xl font-bold mb-4">Identifícate</h2>
                <div className="bg-white p-6 rounded shadow-xl w-[400px]" >
                    <form className="space-y-4">
                        <input
                            onChange={handleForm}
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            className="w-full border p-2 rounded"
                        />
                        <input
                            onChange={handleForm}
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            className="w-full border p-2 rounded"
                        />
                        <button
                            onClick={handleLogin}
                            className="w-full bg-blue-700 text-white p-2 rounded"
                        >
                            Login
                        </button>
                        {error !== null ? <p className="text-red-400">E-mail o constraseña incorrectas</p> : ""}
                    </form>
                </div>
                <hr className="my-4 w-1/2" />
                <div className="flex flex-col items-center justify-center space-y-2 bg-white p-6 rounded shadow-xl w-[400px]">
                    <p className="space-y-4">¿Aún no tienes cuenta?</p>
                    <button
                        className="button flex items-center justify-center w-[200px] mx-auto bg-blue-500 text-white p-2 rounded"
                        onClick={() => setLogin(!login)}
                    > Regístrate </button>
                </div>
            </div>
        </div>
    )
}
