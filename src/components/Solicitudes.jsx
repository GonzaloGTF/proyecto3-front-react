import { useContext } from "react"
import { useEmploy } from "../hooks/useEmploy"
import UserContext from "../UserContext"
import { Navigate } from "react-router-dom"
import { processPending } from "../services/employ"


export default function Solicitudes() {

    const { user } = useContext(UserContext)
    const { employPending, process } = useEmploy()

    return (
        <>
            {user?.roles.includes("admin") ? (< Navigate to="/" />) : (
                < div >
                    <div id="descripcion" className="p-8">
                        <h1 className="text-3xl font-bold mb-4">Solicitudes</h1>
                    </div>

                    <table className="table table-zebra mb-20">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Nombre y apellidos</th>
                                <th>Servicios</th>
                                <th>Localidad</th>
                                <th>Email</th>
                                <th>Telefono</th>
                                <th>Descripción</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {employPending !== null && employPending?.length !== 0 ? (
                                employPending.map((emp, i) => (

                                    <tr key={emp._id} >
                                        <th>{i + 1}</th>
                                        <td >
                                            <div className="avatar flex justify-center">
                                                <div className="w-32 rounded-full ring">
                                                    {emp.imgUrl != null ? (
                                                        <img src={emp.imgUrl} />
                                                    ) : (
                                                        <i className="material-icons text-9xl ">account_circle</i>
                                                    )}
                                                </div>
                                            </div>
                                        </td>

                                        <td>{emp.nombre} {emp.apellidos}</td>
                                        <td> {emp.servicios.join(', ')}</td>
                                        <td> {emp.localidad}</td>
                                        <td> {emp.email}</td>
                                        <td> {emp.telefono}</td>
                                        <td className="text-xs opacity-70">{emp.descripcion}</td>

                                        <td>
                                            <div>
                                                <button
                                                    onClick={() => {
                                                        process(employPending[i], true, useEmploy);
                                                    }}
                                                    className="btn btn-outline btn-success mb-2 w-[80px]">
                                                    Aceptar
                                                </button>
                                                <button

                                                    onClick={() => {
                                                        process(employPending[i], false, useEmploy);
                                                    }}
                                                    className="btn btn-outline btn-error w-[80px]">
                                                    Rechazar
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                ))
                            ) : (

                                <div role="alert" className="alert alert-warning">
                                    <span className="material-icons">face</span>
                                    <span>Ninguna solicitud.</span>
                                </div>
                            )}
                        </tbody>
                    </table>
                </div >
            )}

        </>
    )
}