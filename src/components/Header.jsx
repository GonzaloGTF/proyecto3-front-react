import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css'
import Login from "./Auth/Login";
import Register from "./Auth/Register";

export default function Header() {
    const navigate = useNavigate()
    const [login, setLogin] = useState(true)
    const { user, setUser } = useContext(UserContext)

    return (
        <div className="navbar rounded-box fixed z-[1] bg-gradient-to-r from-blue-600 to-sky-200 " >

            <div className="flex-1 px-5">
                <Link to="/" className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-amber-600">Lantofer</Link>
            </div>

            <Link to="/info" className="btn btn-ghost rounded-btn text-xl font-bold mr-3">Cómo funciona</Link>
            <Link to="/busqueda" className="btn btn-ghost rounded-btn text-xl font-bold mr-3">Buscar servicio</Link>
            {!user?.roles.includes("employ") ? (
                <Link to="/employ-form" className="btn btn-ghost rounded-btn text-xl font-bold mr-3">¿Quieres trabajar?</Link>
            ) : (
                ""
            )}

            <div className="flex justify-end flex-1 px-2">
                <div className="flex items-stretch">


                    {user != null ? (
                        <div className="dropdown dropdown-end ">
                            <label tabIndex={0} className="btn btn-ghost rounded-btn ">
                                {user.imgUrl == null ? (
                                    <div className="flex items-center">
                                        <i className="material-icons">account_circle</i>
                                        <p className="ml-2">{user.nombre}</p>
                                    </div>
                                ) : (
                                    <div className="avatar flex items-center">
                                        <div className="w-10 rounded-full ring">
                                            <img src={user.imgUrl} />
                                        </div>
                                        <p className="ml-2 font-bold text-xl">{user.nombre}</p>
                                    </div>
                                )}
                            </label>


                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                {/* <li><button onClick={null} >
                                    <i className="material-icons">chat</i>
                                    Conversaciones
                                </button></li> */}
                                <li><Link to="/config" >
                                    <i className="material-icons">settings</i>
                                    Configurar cuenta
                                </Link></li>
                                {user?.roles.includes("admin") ? (
                                    <>
                                        <li>
                                            <Link to="/solicitudes">
                                                <i className="material-icons">person_add</i>Solicitudes de trabajo</Link>
                                        </li>
                                        <li>
                                            <Link to="/comentarios">
                                                <i className="material-icons">chat</i>Comentarios</Link>
                                        </li>
                                    </>
                                ) : (
                                    ""
                                )}
                                <li><button onClick={() => {
                                    navigate("/")
                                    setUser(null)
                                }} >
                                    <i className="material-icons">logout</i>
                                    Cerrar sesión
                                </button></li>
                            </ul>
                        </div>
                    ) : (
                        <Popup
                            contentStyle={{ background: 'transparent', border: 'none' }}
                            trigger={<button className="btn btn-ghost rounded-btn text-xl font-bold">
                                Identifícarse
                                <i className="material-icons text-3xl">login</i>
                            </button>}
                            modal
                        >
                            <div>
                                {login ?
                                    <Login login={login} setLogin={setLogin} /> :
                                    <Register login={login} setLogin={setLogin} />
                                }
                            </div>
                        </Popup>
                    )}
                </div>
            </div>

        </div>
    )
}