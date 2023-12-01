import { useContext } from "react"
import UserContext from "../UserContext"
import { Navigate } from "react-router-dom"
import { getComments } from "../hooks/useComment"


export default function Comentarios() {

    const { user } = useContext(UserContext)
    const { comments, deleteComment } = getComments()

    return (
        <>
            {!user?.roles.includes("admin") ? (< Navigate to="/" />) : (
                < div >
                    <div className="p-8">
                        <h1 className="text-3xl font-bold mb-4">Comentarios</h1>
                    </div>

                    {comments !== null && comments.length !== 0 ? (
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
                                {comments.map((com, i) => (

                                    <tr key={i} >
                                        <th>{i + 1}</th>
                                        <td> {com.email}</td>
                                        <td>{com.comentario}</td>
                                        <td>
                                            <button
                                                onClick={() => { deleteComment(comments[i]); }}
                                                className="btn btn-outline btn-error w-[80px]">
                                                Borrar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div role="alert" className="alert alert-warning">
                            <span className="material-icons">face</span>
                            <span>Ningun comentario.</span>
                        </div>
                    )}
                </div >
            )
            }

        </>
    )
}