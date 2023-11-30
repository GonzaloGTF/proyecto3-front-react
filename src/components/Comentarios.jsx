import { useContext } from "react"
import UserContext from "../UserContext"
import { Navigate } from "react-router-dom"
import { getComments } from "../services/Contacto"


export default function Comentarios() {

    const { user } = useContext(UserContext)
    const { comments } = getComments()
    // const { employPending } = useEmploy()

    return (
        <>
            {user?.roles.includes("admin") ? (< Navigate to="/" />) : (
                < div >
                    <div className="p-8">
                        <h1 className="text-3xl font-bold mb-4">Comentarios</h1>
                    </div>

                    <table className="table table-zebra mb-20">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Comentario</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {comments !== null ? (
                                comments.map((com, i) => (

                                    <tr key={i} >
                                        <th>{i + 1}</th>
                                        <th> {com.email}</th>
                                        <th>{com.comentario}</th>
                                        <th>
                                            <button
                                                // onClick={() => {processPending(employPending[i], false, useEmploy);}}
                                                className="btn btn-outline btn-error w-[80px]">
                                                Borrar
                                            </button>
                                        </th>
                                    </tr>
                                ))
                            ) : (

                                <div role="alert" className="alert alert-warning">
                                    <span className="material-icons">face</span>
                                    <span>Ninguna comentario.</span>
                                </div>
                            )}
                        </tbody>
                    </table>
                </div >
            )
            }

        </>
    )
}