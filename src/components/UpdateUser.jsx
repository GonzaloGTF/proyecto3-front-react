import { useContext, useEffect, useState } from "react"
import UserContext from "../UserContext";
import { Navigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { fetchService } from "../services/auth";

export default function UpdateUser() {
    const { user, setUser, setError, error } = useContext(UserContext)
    const [image, setImage] = useState(null);

    const { handleForm, form } = useForm()
    const [bool, setBool] = useState(true);
    const { handleEdit } = fetchService({ form })

    useEffect(() => (
        setError(null)
    ), [])



    const handleImgChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };

    const handleImgSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', image);
        formData.append('userId', user._id);

        await fetch('https://p01--proyecto3-back-nest--k4bvp5frjj2w.code.run/users/img', {
            method: 'PUT',
            body: formData,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(res => {

                if (res._id) {
                    setError(null)
                    setUser(res)

                }
                else {
                    setError(res.message)
                }
            })
            .catch((e) => console.log(e))

    };

    return (

        <div>
            {!user ? (<Navigate to="/" />) : (
                <div>
                    <h1 className="text-3xl font-bold mb-4">Configuracion de cuenta</h1>

                    <div id="avatar" className="flex justify-center items-center">
                        <form onSubmit={handleImgSubmit}>
                            <input type="file" accept="image/*" onChange={handleImgChange} className="file-input file-input-bordered file-input-sm file-input-info w-[500px]" />
                            <button type="submit" className="btn btn-info btn-sm ml-5">Subir Imagen</button>
                        </form>

                        <div className="avatar m-5">
                            <div className="w-24 rounded-full ring">
                                {user?.imgUrl != null ? (
                                    <img src={user.imgUrl} />
                                ) : (
                                    <i className="material-icons text-8xl ">account_circle</i>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-col">
                        <form className="space-y-4 w-[500px]">
                            <input
                                onChange={handleForm}
                                type="text"
                                defaultValue={user.nombre}
                                disabled={bool}
                                name="nombre"
                                placeholder="Nombre"
                                className="input input-bordered input-info w-full border p-2 rounded"
                            />
                            <input
                                onChange={handleForm}
                                type="text"
                                defaultValue={user.apellidos}
                                disabled={bool}
                                name="apellidos"
                                placeholder="Apellidos"
                                className="input input-bordered input-info w-full border p-2 rounded"
                            />
                            <input
                                onChange={handleForm}
                                type="email"
                                defaultValue={user.email}
                                disabled={bool}
                                name="email"
                                placeholder="E-mail"
                                className="input input-bordered input-info w-full border p-2 rounded"
                            />
                            <input
                                onChange={handleForm}
                                type="tel"
                                defaultValue={user.telefono}
                                disabled={bool}
                                name="telefono"
                                placeholder="Telefono"
                                className="input input-bordered input-info w-full border p-2 rounded"
                            />

                            {user.roles.includes("employ") ? (
                                <>  <input
                                    onChange={handleForm}
                                    defaultValue={user.localidad}
                                    disabled={bool}
                                    type="text"
                                    name="localidad"
                                    placeholder="Lugar donde vas a prestar servicios."
                                    className="input input-bordered input-info w-full border p-2 rounded text-sm"
                                />
                                    <textarea
                                        onChange={handleForm}
                                        defaultValue={user.descripcion}

                                        disabled={bool}
                                        name="descripcion"
                                        placeholder="Descripción para mostrar a los clientes."
                                        className="textarea textarea-info w-full border p-2 rounded h-[200px]"
                                    ></textarea>
                                </>
                            ) : (
                                ""
                            )}

                            {!bool ? (
                                <button
                                    onClick={(e) => {
                                        handleEdit(e);
                                        if (form !== "") {
                                            setBool(!bool);
                                        }
                                    }}
                                    className="w-full bg-blue-700 text-white p-2 rounded"
                                >
                                    Enviar
                                </button>
                            ) : (
                                ""
                            )}
                            {error !== null ? <p className="text-red-400">{error}</p> : ""}

                        </form>
                        {bool ? (
                            <button
                                onClick={() => setBool(!bool)}
                                className="bg-blue-700 text-white mt-4 p-2 rounded w-[500px]"
                            >
                                Editar perfil
                            </button>
                        ) : (
                            ""
                        )}
                    </div>

                </div>
            )}
        </div>
    );
};
