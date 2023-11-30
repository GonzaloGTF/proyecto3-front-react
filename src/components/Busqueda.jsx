import { useContext } from "react"
import { useEmploy } from "../hooks/useEmploy"
import UserContext from "../UserContext"


export default function Busqueda() {
    const profesiones = ["Carpintero", "Electricista", "Pintor", "Fontanero"]
    const { user } = useContext(UserContext)

    const { profesion, handleProfChange,
        handleFilter, employsFilter,
        setSelectEmploy, selectEmploy,
        selectEmployFunction } = useEmploy()

    return (
        <div>
            <div id="descripcion" className="p-8">
                <h1 className="text-3xl font-bold mb-4">Busca el servicio que necesites</h1>
                <p className="text-gray-600">Selecciona los servicios que necesites en los filtros, escoge el que más te convenga y ponte en contacto con él.</p>
            </div>

            {selectEmploy == null ? (
                <div>
                    <div id="filtros" className="mb-10">
                        <h2 className="text-4xl font-bold mb-4">Filtros</h2>
                        <div className="flex flex-wrap p-6 rounded shadow-xl">
                            <div className="w-1/2">
                                <p className="">Servicios: {profesion.join(', ')}</p>
                                {profesiones.map((prof) => (
                                    <div key={prof} className="flex flex-row form-control">
                                        <label className="cursor-pointer label">
                                            <input
                                                type="checkbox"
                                                onChange={() => {
                                                    handleProfChange(prof)
                                                }}
                                                checked={profesion.includes(prof)}
                                                className="checkbox checkbox-info"
                                            />
                                            <p className="ml-2">{prof}</p>
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <div>
                                    <p className="mt-3 mb-3">Localidad:</p>
                                    <input
                                        onChange={handleFilter}
                                        type="text"
                                        name="localidad"
                                        placeholder="Localidad."
                                        className="input input-bordered input-info w-full border p-2 rounded text-sm"
                                    />
                                </div>

                                <div>
                                    <p className="mt-3 mb-3">Nombre:</p>
                                    <input
                                        onChange={handleFilter}
                                        type="text"
                                        name="nombre"
                                        placeholder="Nombre."
                                        className="input input-bordered input-info w-full border p-2 rounded text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    {!user?.roles.includes("user") ? (
                        <div role="alert" className="alert alert-info mb-5">
                            <span className="material-icons">info</span>
                            <span>Necesitas identificarte para poder ver más información y contactar con los trabajadores</span>
                        </div>
                    ) : ("")}




                    <div className="flex flex-wrap pb-20">
                        {employsFilter.length !== 0 ? (
                            employsFilter.map((emp, i) => (

                                <div key={emp._id} className="bg-base-100 shadow-xl m-8 w-[410px] h-[500px] flex flex-col justify-between">
                                    <div className="avatar flex justify-center">
                                        <div className="w-32 rounded-full ring">
                                            {emp.imgUrl != null ? (
                                                <img src={emp.imgUrl} />
                                            ) : (
                                                <i className="material-icons text-9xl ">account_circle</i>
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h2 className="mb-3">{emp.nombre} {emp.apellidos}</h2>
                                        <h3>Servicios: {emp.servicios.join(', ')}</h3>
                                        <h3 className="mt-1 mb-3">Localidad: {emp.localidad}</h3>
                                        <p className="overflow-hidden line-clamp-5">{emp.descripcion}</p>
                                    </div>

                                    <div className="flex justify-center m-3">
                                        <button
                                            disabled={!user?.roles.includes("user")}
                                            onClick={() => {
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                                selectEmployFunction(i);
                                            }}
                                            className="btn btn-primary">
                                            Más información
                                        </button>
                                    </div>
                                </div>

                            ))
                        ) : (
                            <div role="alert" className="alert alert-warning">
                                <span className="material-icons">face</span>
                                <span>No se han encontrado resultados con ese filtro.</span>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="p-4 bg-gray-100 ">
                    <div className="avatar flex justify-center">
                        <div className="w-32 rounded-full ring">
                            {selectEmploy.imgUrl != null ? (
                                <img src={selectEmploy.imgUrl} />
                            ) : (
                                <i className="material-icons text-9xl ">account_circle</i>
                            )}
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-2">{selectEmploy.nombre} {selectEmploy.apellidos}</h2>
                    <p className="mb-2">Servicios: {selectEmploy.servicios.join(', ')}</p>
                    <p className="mb-2">Localidad: {selectEmploy.localidad}</p>
                    <p className="mb-2">Contactos:</p>
                    <ul className="list-disc pl-5 mb-2">
                        <li>Email: {selectEmploy.email}</li>
                        <li>Teléfono: {selectEmploy.telefono}</li>
                    </ul>
                    <p className="mb-2">{selectEmploy.descripcion}</p>

                    <div className="flex justify-center m-3">
                        <button onClick={(() => setSelectEmploy(null))} className="btn btn-primary">

                            <span className="material-icons">arrow_back</span>
                            Buscar otro
                        </button>

                    </div>
                </div>

            )}
        </div >
    )
}