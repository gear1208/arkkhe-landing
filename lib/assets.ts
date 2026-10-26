export const ASSET_BASE =
  process.env.NEXT_PUBLIC_ASSET_BASE ??
  "https://pub-36eefd528bbb4e28bdef0ce39a1018e0.r2.dev/Prompt/36-exoform/public";

const asset = (path: string) => `${ASSET_BASE}${path}`;

export const ASSETS = Object.freeze({
  handFilm:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3Bd1EO6EIHxSqCgleKKy9qZ3l1v/hf_20260815_170814_3c3cadd2-b4cb-426a-afbc-3d7c1ce49abf.mp4",
  handPoster: asset("/images/hand-poster.jpg"),
  armDetail: asset("/images/arm-detail.jpg"),
  logo: asset("/images/logo-mark.png")
});
