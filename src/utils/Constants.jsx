export const bgImage =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg";

export const NetflixLogo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const Api_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API}`,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const GPT_BG_Image =
  "https://t4.ftcdn.net/jpg/02/81/37/31/360_F_281373104_OX6POdDHhyyy33hRfAOqTR11bO9aEN1T.jpg";

export const Language = [
  {
    identifier: "en",
    name: "English",
  },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "italian", name: "Italian" },
  { identifier: "russian", name: "Russian" },
];

export const GPT_KEY = import.meta.env.VITE_GPT_KEY;
