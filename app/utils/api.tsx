export async function getNoticias() {
    const res = await fetch("http://localhost:1337/api/noticias?populate=*", {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error(`Error al obtener noticias: ${res.statusText}`);
    }
  
    const data = await res.json();
    return data.data;
  }
  
  export async function getCategorias() {
    const res = await fetch("http://localhost:1337/api/categorias", {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error(`Error al obtener categorías: ${res.statusText}`);
    }
  
    const data = await res.json();
    return data.data;
  }
  
  export async function getTags() {
    const res = await fetch("http://localhost:1337/api/tags", {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error(`Error al obtener tags: ${res.statusText}`);
    }
  
    const data = await res.json();
    return data.data;
  }

  export async function getNoticia(slug?: string) {
    if (!slug) return null;
  
    try {
      const res = await fetch(
        `http://localhost:1337/api/noticias?filters[link][$eq]=${slug}&populate=*`,
        { cache: "no-store" }
      );
  
      if (!res.ok) throw new Error(`Error al obtener la noticia: ${res.statusText}`);
  
      const data = await res.json();
  
      if (!data.data || data.data.length === 0) return null;
  
      const noticia = data.data[0];
  
      return {
        id: noticia.id || "Sin ID",
        categorias: noticia.categorias || "Sin categoría",
        tags: noticia.tags || "Sin tags",
        title: noticia.title || "Sin título",
        date: noticia.date || "Fecha no disponible",
        description: noticia.description || "Sin descripción",
        image: noticia.image.length > 0 ? `http://localhost:1337${noticia.image[0].url}` : null, 
      };
    } catch (error) {
      console.error("❌ Error al recuperar la noticia:", error);
      return null;
    }
  }
  