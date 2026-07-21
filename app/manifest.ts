import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WEPlan Solicitors — Wills & Estate Planning",
    short_name: "WEPlan",
    description:
      "Wills and estate planning specialists led by Kerstin Glomb, serving the ACT and NSW.",
    start_url: "/",
    display: "standalone",
    background_color: "#16232d",
    theme_color: "#16232d",
    icons: [
      {
        src: "/images/cropped-WPS_Social-Media-Icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/cropped-WPS_Social-Media-Icon-270x270.png",
        sizes: "270x270",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
