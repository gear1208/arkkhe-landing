/* Todos los archivos viven ahora dentro del proyecto, en public/images.
   Ya no dependen de servidores externos. Si algún día quieres volver a
   cargarlos desde otra dirección, define NEXT_PUBLIC_ASSET_BASE. */
export const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";

const asset = (path: string) => `${ASSET_BASE}${path}`;

export const ASSETS = Object.freeze({
  handFilm: asset("/images/hf_20260815_170814_3c3cadd2-b4cb-426a-afbc-3d7c1ce49abf.mp4"),
  handPoster: asset("/images/hand-poster.jpeg"),
  armDetail: asset("/images/arm-detail.jpeg"),
  logo: asset("/images/logo-mark.png")
});
