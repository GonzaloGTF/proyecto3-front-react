import { useContext, useEffect } from "react"
import UserContext from "../UserContext"
import { useForm } from "../hooks/useForm"
import { fetchComent } from "../services/Contacto"
import mix from "../assets/mix.jpg"

export default function Contact() {


    const { user } = useContext(UserContext)
    const { form, handleForm } = useForm()
    const { handleComent, send, setSend } = fetchComent({ form })
    const { error, setError } = useContext(UserContext)

    useEffect(() => {
        setError(null)
        setSend(null)
    }, [])

    return (
        <div className="flex justify-center items-center mt-[200px]">
            <div className="m-8 w-[500px]">
                <h2 className="text-4xl font-bold mb-4">Contacta con nosotros</h2>
                <p className="pb-5">Para cualquier consulta o sugerencia, ponte en contacto rellenando este formulario:</p>

                <form className="space-y-4">
                    <input
                        onChange={handleForm}
                        type="email"
                        name="email"
                        value={user ? user.email : ""}
                        placeholder="E-mail"
                        className="input input-bordered input-info w-full border p-2 rounded"
                    />

                    <textarea
                        onChange={handleForm}
                        name="comentario"
                        placeholder="Escribe tu mensaje."
                        className="textarea textarea-info w-full border p-2 rounded h-[200px]"
                    >
                    </textarea>


                    {send == null ? (
                        <button
                            onClick={handleComent}
                            className="w-full bg-blue-700 text-white p-2 rounded"
                        >
                            Enviar
                        </button>
                    ) : (
                        <div role="alert" className="alert alert-success">
                            <span className="material-icons"> check_circle_outline </span>
                            <span>{send}</span>
                        </div>

                    )}

                    {error !== null ? <p className="text-red-400">Rellene el formulario.</p> : ""}

                </form>
            </div>

            <div className="w-1/3 flex justify-center">
                <img src={mix} className="rounded-[80px]" />
            </div>
        </div>
    )
}
