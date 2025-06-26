"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NoticiasFiltradas({ noticias }: { noticias: any[] }) {
  const searchParams = useSearchParams();
  const categoriaSeleccionada = searchParams.get("categoria");
  const tagSeleccionado = searchParams.get("tag");

  // 🔥 Filtrar noticias por categoría y tags correctamente
  const noticiasFiltradas = noticias.filter((noticia: any) => {
  
    const categoriasNoticia = noticia?.categorias?.map((cat: any) => cat.Name) || [];
    const tagsNoticia = noticia?.tags?.map((tag: any) => tag.Name) || [];
  
    const perteneceCategoria = categoriaSeleccionada
      ? categoriasNoticia.includes(categoriaSeleccionada)
      : true;
  
    const tieneTag = tagSeleccionado
      ? tagsNoticia.includes(tagSeleccionado)
      : true;
  
    return perteneceCategoria && tieneTag;
  });
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {noticiasFiltradas.length === 0 ? (
        <p className="text-center text-gray-500 col-span-full">
          No hay noticias disponibles con los filtros seleccionados.
        </p>
      ) : (
        noticiasFiltradas.map((noticia: any) => {
          const imagenUrl = noticia.image[0].url || null;

          return (
            <Link key={noticia.id} href={`/noticias/${noticia.link || noticia.slug}`} className="block">
              <div className="bg-[#f4f0e8] p-6 rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-105">
                {imagenUrl ? (
                  <div className="relative w-full h-52 rounded-xl overflow-hidden">
                    <Image
                      src={`http://localhost:1337${imagenUrl}`}
                      alt={noticia.image?.name || "Imagen de noticia"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-52 flex items-center justify-center bg-gray-300 rounded-xl">
                    <p className="text-gray-600">Sin imagen</p>
                  </div>
                )}
                <p className="text-sm text-[#A97B50] font-semibold mt-4">
                  {new Date(noticia.date)
                    .toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })
                    .replace(/ de /g, " ")
                    .toUpperCase()}
                </p>
                <h2 className="text-2xl font-bold text-[#603A18] mt-2 leading-tight">
                  {noticia.title}
                </h2>
                <p className="text-gray-700 text-sm mt-2">
                  {noticia.description?.substring(0, 120) || "Sin descripción"}...
                </p>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
}
