"use client";

import { useState } from "react";

export default function Page() {
    const [selected, setSelected] = useState("");

    return (
        <main className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start font-serif text-[#3c2c1f]">
            {/* Información de contacto */}
            <div className="flex flex-col justify-start">
                <h1 className="text-5xl font-bold">Contáctanos</h1>
                <p className="text-lg mt-4 leading-relaxed">
                    Entra en contacto con nosotros para consultas generales. Respecto a vocaciones y peticiones de oración, 
                    contacta a los Franciscanos de tu zona.
                </p>
                <br />
                <p className="font-bold uppercase">ANTICAMERA DEL MINISTRO GENERAL</p>
                <p>Secretario particular<br />
                Fr. Vjekoslav Milicevic, OFM</p>
                <p>Email: <a href="mailto:mingen@ofm.org" className="text-red-700 underline">mingen@ofm.org</a></p>
                <br />
                <p className="font-bold uppercase">CURIA GENERAL</p>
                <p>Email: <a href="mailto:comgen@ofm.org" className="text-red-700 underline">comgen@ofm.org</a></p>
                <p>Tel: +39 06 684919</p>
                <p>Fax: +39 06 6380292</p>
                <p className="mt-4">Curia Generale dei Frati Minori <br /> Via di S. Maria Mediatrice, 25 <br /> 00165 Roma, Italia</p>
            </div>

            {/* Formulario alineado con el texto */}
            <form className="space-y-4 bg-white p-6 w-full self-center mt-6">
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" className="w-full p-2 border border-gray-400 rounded-md" placeholder="Nombre" required />
                    <input type="text" className="w-full p-2 border border-gray-400 rounded-md" placeholder="Apellidos" required />
                </div>
                <input type="email" className="w-full p-2 border border-gray-400 rounded-md" placeholder="E-mail" required />
                
                {/* Selector de destinatario */}
                <select
                    className="w-full p-2 border border-gray-400 rounded-md bg-gray-300 text-gray-900"
                    required
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                >
                    {selected === "" && <option value="" disabled>Escoge destinatario</option>}
                    <option value="ministro">Anticamera del Ministro General</option>
                    <option value="curia">Curia General</option>
                </select>

                <textarea className="w-full p-2 border border-gray-400 rounded-md" placeholder="Mensaje" rows="4" required></textarea>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="privacy" required />
                    <label htmlFor="privacy" className="text-sm">He leído y acepto la <a href="#" className="text-red-700 underline">Política de privacidad</a></label>
                </div>
                <button type="submit" className="bg-[#c49a6c] text-white p-2 rounded-md w-48 hover:bg-[#b2845e] transition">
                    ENVIAR
                </button>
            </form>
        </main>
    );
}
