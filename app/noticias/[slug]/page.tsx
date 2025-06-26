import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getNoticia } from "@/app/utils/api";

type NoticiaPageProps = {
  params: { slug?: string };
};

export default async function NoticiaPage({ params }: NoticiaPageProps) {
  if (!params?.slug) return notFound();

  const noticia = await getNoticia(params.slug);

  if (!noticia) return notFound();

  return (
    <main className="p-8 w-full">
      <Link href="/noticias" className="text-sm text-[#A97B50] hover:underline flex items-center">
        <span className="mr-1">←</span> VOLVER A NOTICIAS
      </Link>

      <h1 className="mt-4 text-5xl font-serif font-bold text-[#603A18]">{noticia.title}</h1>
      <p className="text-lg text-[#603A18] mt-2">
        {new Date(noticia.date)
          .toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })
          .replace(/ de /g, " ")
          .toUpperCase()}
      </p>

      {noticia.image && (
        <div className="mt-6 bg-[#c4a484] p-4 rounded-2xl flex justify-center w-full">
          <Image
            src={noticia.image}
            alt={noticia.title}
            width={800}
            height={450}
            className="rounded-2xl object-cover w-full"
            unoptimized
          />
        </div>
      )}

      <article className="mt-6 text-lg leading-relaxed text-gray-900 text-justify mx-auto max-w-3xl">
      {noticia.description
          ? noticia.description.split("\n").map((paragraph: string, index: number) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))
          : <p className="text-gray-500">No hay descripción disponible.</p>
        }
      </article>
    </main>
  );
}
