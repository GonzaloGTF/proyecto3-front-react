//import { useRegister } from "../../hooks/useRegister"
//import { registerAdd } from "../../services/register"
import { fetchService } from "../../services/auth"
import { useContext, useEffect } from "react"
import UserContext from "../../UserContext"
import { useForm } from "../../hooks/useForm"

export default function Register({ login, setLogin }) {

    const { form, handleForm } = useForm()
    const { handleRegister } = fetchService({ form })


    const { error, setError } = useContext(UserContext)

    useEffect(() => (
        setError(null)
    ), [])

    return (
        <div className="flex flex-col items-center justify-center  h-screen">
            <div className="bg-white flex flex-col items-center justify-center rounded-[30px] w-[500px] h-[700px]">
                <h2 className="text-4xl font-bold mb-4">Nueva cuenta</h2>
                <div className="bg-white p-6 rounded shadow-xl w-[400px]">
                    <form className="space-y-4">
                        <input
                            onChange={handleForm}
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            className="w-full border p-2 rounded"
                        />
                        <input
                            onChange={handleForm}
                            type="text"
                            name="apellidos"
                            placeholder="Apellidos"
                            className="w-full border p-2 rounded"
                        />
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
                        <input
                            onChange={handleForm}
                            type="tel"
                            name="telefono"
                            placeholder="Telefono"
                            className="w-full border p-2 rounded"
                        />
                        <button
                            onClick={handleRegister}
                            className="w-full bg-blue-700 text-white p-2 rounded"
                        >
                            Registrarse
                        </button>
                        {error !== null ? <p className="text-red-400">{error}</p> : ""}

                    </form>
                </div>

                <hr className="my-4 w-1/2" />
                <div className="flex flex-col items-center justify-center space-y-2 bg-white p-6 rounded shadow-xl w-[400px]">
                    <p className="space-y-4">Si ya estas registrado:</p>
                    <button
                        onClick={() => setLogin(!login)}
                        className="button flex items-center justify-center w-[200px] mx-auto bg-blue-500 text-white p-2 rounded"
                    > Identifícate </button>
                </div>
            </div>
        </div >
    )
}