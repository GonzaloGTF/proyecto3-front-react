import logo from "../assets/logo.jpg"
import carpintero from "../assets/carpintero.jpg"
import electricista from "../assets/electricista.jpg"
import pintor from "../assets/pintor.jpg"
import fontanero from "../assets/fontanero.jpg"


export default function Home() {

    return (
        <div className="flex flex-col">

            <div className="flex justify-between mb-24 bg-sky-100 rounded-[50px]">
                <img className="rounded-[50px] mr-14" src={logo} />
                <div className="flex flex-col items-center mr-[35%]">
                    <span className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-amber-600">Lantofer</span>
                    <p className="text-lg">Te ponemos en contacto directo con profesionales que te ayudarán con tu hogar.</p>
                    <p className="text-lg">Solo tienes que buscar el servicio que necesites y ponerte en contacto.</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="text-lg">Proporcionamos cuatro servicios:</p>
                <div className="flex space-between m-10">
                    <div className="flex flex-col items-center m-5">
                        <h2 className="text-2xl font-bold m-3">Carpintero</h2>
                        <img className="w-[250px] rounded-[15px]" src={carpintero} />
                    </div>
                    <div className="flex flex-col items-center m-5">
                        <h2 className="text-2xl font-bold m-3">Electricista</h2>
                        <img className="w-[250px] rounded-[15px]" src={electricista} />
                    </div>


                    <div className="flex flex-col items-center m-5">
                        <h2 className="text-2xl font-bold m-3">Pintor</h2>
                        <img className="w-[250px] rounded-[15px]" src={pintor} />
                    </div>
                    <div className="flex flex-col items-center m-5">
                        <h2 className="text-2xl font-bold m-3">Fontanero</h2>
                        <img className="w-[250px] rounded-[15px]" src={fontanero} />
                    </div>
                </div>
            </div>



        </div>
    )
}