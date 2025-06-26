"use client"; // Asegura que se ejecute en el navegador

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [noticias, setNoticias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNoticias() {
      try {
        const res = await fetch("http://localhost:1337/api/noticias?populate=*", { cache: "no-store" });
        if (!res.ok) throw new Error(`Error al obtener noticias: ${res.statusText}`);
        const data = await res.json();
        setNoticias(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchNoticias();
  }, []);

  if (loading) return <p className="text-center text-xl">Cargando noticias...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Noticias del mundo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {noticias.map((noticia) => (
          <Link key={noticia.id} href={`/noticias/${noticia.link}`} className="block">
            <div className="bg-[#f4f0e8] p-6 rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-105">
              {noticia.image.length > 0 && (
                <div className="relative w-full h-52 rounded-xl overflow-hidden">
                  <Image
                    src={`http://localhost:1337${noticia.image[0].url}`}
                    alt={noticia.image[0].name || "Imagen de noticia"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <p className="text-sm text-[#A97B50] font-semibold mt-4">
                {new Date(noticia.date)
                  .toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })
                  .replace(/ de /g, " ")
                  .toUpperCase()}
              </p>
              <h2 className="text-2xl font-bold text-[#603A18] mt-2 leading-tight">{noticia.title}</h2>
              <p className="text-gray-700 text-sm mt-2">{noticia.description.substring(0, 120)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
