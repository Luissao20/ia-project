import { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots{
    return{
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/contact"],
        },
        sitemap: "https://agentifynow.ai/sitemap.xml",
    }
}