import { Link } from "react-router-dom";
import img1 from "../assets/info-1.jpg"
import img2 from "../assets/info-2.jpg"
import img3 from "../assets/info-3.jpg"


export default function Info() {

    return (
        <div>
            <div className="pb-20">
                <h1 className="text-3xl font-bold mb-4">Cómo funciona</h1>
                <p className="text-lg">Esta web sirve para solicitar y contratar a un profesional que te ayude con los servicios del hogar.</p>
                <p className="text-lg">Aquí te explicamos en pocos pasos cómo funciona, sigue estos sencillos pasos para poder solicitar un trabajador.</p>
            </div>

            <div className="flex flex-col ">
                <div className="flex w-full justify-between p-10 mb-16 bg-sky-50 rounded-[50px]">
                    <div className="w-1/2 flex items-center justify-between">
                        <div className="pr-20">
                            <h2 className="text-2xl font-bold mb-4">Busca el servicio que necesites</h2>
                            <p className="text-lg">En nuestra página de
                                <Link to="/busqueda" className="link link-success">
                                    <i className="ml-2">buscar servicio</i>
                                </Link>
                                {" "}puedes buscar las profesiones que podemos ofrecerte y seleccionar al trabajador que necesites.</p>
                        </div>
                        <div className="divider divider-info divider-horizontal text-4xl font-bold ">
                            <p className="rounded-full bg-sky-200 w-10 flex items-center justify-center">1</p>
                        </div>
                    </div>
                    <img src={img1} className="mr-[200px] w-[250px] rounded-[20px]" />
                </div>

                <div className="flex w-full justify-between p-10 mb-16 bg-sky-50 rounded-[50px]">

                    <img src={img2} alt="imagen" className="ml-[200px]" />

                    <div className="w-1/2 flex items-center justify-between">
                        <div className="divider divider-info divider-horizontal text-4xl font-bold">
                            <p className="rounded-full bg-sky-200 w-10 flex items-center justify-center">2</p>
                        </div>
                        <div className="pl-20">
                            <h2 className="text-2xl font-bold mb-4">Selecciona a la persona</h2>
                            <p className="text-lg">Una vez seleccionado el servicio, se mostrarán los trabajadores que puedan hacer dicha labor. Seleccione el que más le convenga.</p>
                        </div>
                    </div>
                </div>

                <div className="flex w-full justify-between p-10 mb-24 bg-sky-50 rounded-[50px]">
                    <div className="w-1/2 flex items-center justify-between">
                        <div className="pr-20">
                            <h2 className="text-2xl font-bold mb-4">Contacta y acuerda una fecha</h2>
                            <p className="text-lg">Selecciona uno de ellos y ponte en contacto con él para concretar una fecha, hora y ubicación.</p>
                        </div>
                        <div className="divider divider-info divider-horizontal text-4xl font-bold">
                            <p className="rounded-full bg-sky-200 w-10 flex items-center justify-center">3</p>
                        </div>
                    </div>


                    <img className="mr-[200px]" src={img3} alt="imagen" />

                </div>
            </div>
        </div>
    )
}