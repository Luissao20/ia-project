import { MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap{
    return[
        {
            url: "agentifynow.ai",
            lastModified: new Date(),
        },
        {
            url: "agentifynow.ai/services",
            lastModified: new Date(),
        },
        {
            url: "agentifynow.ai/contact",
            lastModified: new Date(),
        },
        {
            url: "agentifynow.ai/pricing",
            lastModified: new Date(),
        },
        {
            url: "agentifynow.ai/resources",
            lastModified: new Date(),
        },
        {
            url: "agentifynow.ai/case-studies",
            lastModified: new Date(),
        },
        {
            url: "agentifynow.ai/why-agentify",
            lastModified: new Date(),
        }
    ];
}