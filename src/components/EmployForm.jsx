import { useEmploy } from "../hooks/useEmploy"
import { employPut } from "../services/employ"
import { useContext, useEffect } from "react"
import UserContext from "../UserContext"
import img1 from "../assets/employ1.jpg"
import img2 from "../assets/employ2.jpg"

export default function EmployForm() {
    const profesiones = ["Carpintero", "Electricista", "Pintor", "Fontanero"]

    const { employForm, handleEmployForm, profesion, handleProfChange } = useEmploy()
    const { handleEmploy } = employPut({ employForm, profesion })

    const { error, setError, user } = useContext(UserContext)

    useEffect(() => (
        setError(null)
    ), [])

    return (
        <div>
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">Apúntate como trabajador</h1>
                <p className="text-gray-600">Rellena este formulario para añadirte a la lista de trabajadores y que la gente contacte contigo para pedirte servicios.</p>
            </div>

            <div id="formEmploy" className="flex items-center justify-center">

                <img src={img1} className="w-[400px] rounded-[50px]" />

                {user?.roles.includes("pending") || user?.roles.includes("employ") ? (
                    <div className="flex justify-center p-10">
                        <div role="alert" className="alert alert-success flex justify-center w-[600px]">
                            <span className="material-icons">check_circle_outline</span>
                            <span>Formulario enviado, espere a una respuesta.</span>
                        </div>
                    </div>
                ) : (


                    <div className="flex items-center justify-center flex-col items-center m-20">
                        <h2 className="text-4xl font-bold mb-4">Empleado</h2>
                        <div className="bg-white p-6 rounded shadow-xl w-[400px]">


                            <form className="space-y-4">

                                <div>
                                    <p>*Servicios: {profesion.join(', ')}</p>

                                    {profesiones.map((prof) => (
                                        <div key={prof} className="flex flex-row form-control">
                                            <label className="cursor-pointer label">
                                                <input
                                                    type="checkbox"
                                                    onChange={() => handleProfChange(prof)}
                                                    checked={profesion.includes(prof)}
                                                    className="checkbox checkbox-info"
                                                />
                                                <p className="ml-2">{prof}</p>
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <p className="mt-3 mb-3">Otro servicio:</p>
                                    <input
                                        onChange={handleEmployForm}
                                        type="text"
                                        name="servicios"
                                        placeholder="Si cree que puede ofrecer otro servicio escríbalo."
                                        className="input input-bordered input-info w-full border p-2 rounded text-sm"
                                    />
                                </div>

                                <div>
                                    <p className="mt-3 mb-3">*Provincia:</p>
                                    <input
                                        onChange={handleEmployForm}
                                        type="text"
                                        name="localidad"
                                        placeholder="Lugar donde vas a prestar servicios."
                                        className="input input-bordered input-info w-full border p-2 rounded text-sm"
                                    />
                                </div>

                                <div>
                                    <p className="mb-3 mt-3">Descripcíon:</p>
                                    <textarea
                                        onChange={handleEmployForm}
                                        name="descripcion"
                                        placeholder="Descripción para mostrar a los clientes."
                                        className="textarea textarea-info w-full border p-2 rounded h-[200px]"
                                    >
                                    </textarea>
                                </div>


                                {user?.roles.includes("user") ? (
                                    <button
                                        onClick={handleEmploy}
                                        className="w-full bg-blue-700 text-white p-2 rounded"
                                    >
                                        Enviar
                                    </button>
                                ) : (

                                    < div role="alert" className="alert alert-warning">
                                        <span className="material-icons"> warning_amber </span>
                                        <span>Identifícate para poder mandar el formulario de empleo.</span>
                                    </div>
                                )}

                                {error !== null ? <p className="text-red-400">{error}</p> : ""}

                            </form>
                        </div>
                    </div>
                )}

                <img src={img2} className="w-[400px] rounded-[50px]" />
            </div>
        </div >

    )
}