"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import NoticiasFiltradas from "@/app/components/NoticiasFiltradas";
import { getNoticias, getCategorias, getTags } from "@/app/utils/api";

// Definir interfaces para tipado
interface Categoria {
  id: number;
  Name: string;
}

interface Tag {
  id: number;
  Name: string;
}

interface Noticia {
  id: number;
  titulo: string;
  contenido: string;
  categorias: Categoria[];
  tags: Tag[];
}

export default function Home() {
  const searchParams = useSearchParams();
  const categoriaSeleccionada = searchParams.get("categoria");
  const tagSeleccionado = searchParams.get("tag");

  const [noticias, setNoticias] = React.useState<Noticia[]>([]);
  const [categorias, setCategorias] = React.useState<Categoria[]>([]);
  const [tags, setTags] = React.useState<Tag[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [noticiasData, categoriasData, tagsData] = await Promise.all([
          getNoticias(),
          getCategorias(),
          getTags(),
        ]);

        setNoticias(noticiasData);
        setCategorias(categoriasData);
        setTags(tagsData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }
    fetchData();
  }, []);

  // Filtrar noticias si hay un filtro activo
  const noticiasFiltradas = noticias.filter((noticia) => {
    const perteneceCategoria = categoriaSeleccionada
      ? noticia.categorias.some((c) => c.Name === categoriaSeleccionada)
      : true;

    const tieneTag = tagSeleccionado
      ? noticia.tags.some((t) => t.Name === tagSeleccionado)
      : true;

    return perteneceCategoria && tieneTag;
  });

  return (
    <main className="p-8 grid grid-cols-4 gap-8">
      {/* Noticias */}
      <div className="col-span-3">
        <h1 className="text-4xl font-bold text-center mb-8">
          Noticias del mundo
        </h1>
        <NoticiasFiltradas noticias={noticiasFiltradas} />
      </div>

      {/* Sidebar de categorías y tags */}
      <aside className="col-span-1 space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-[#603A18] mb-4">Categorías</h3>
          <ul className="space-y-2">
            {categorias.map((categoria) => (
              <li key={categoria.id}>
                <Link
                  href={`?categoria=${categoria.Name}`}
                  className="text-[#A97B50] font-medium hover:underline"
                >
                  {categoria.Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-[#603A18] mb-4">Tags Populares</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag.id}
                href={`?tag=${tag.Name}`}
                className="bg-[#A97B50] text-white px-3 py-1 rounded-full text-sm"
              >
                #{tag.Name}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </main>
  );
}
