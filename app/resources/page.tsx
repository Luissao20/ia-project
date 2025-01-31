import Header from "./components/header";
import BlogPost from "./components/blog-post";
import Podcast from "./components/podcast";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resources",
    description: "Read our latest blog posts and listen to our podcast episodes to learn more about AI automation solutions"
}

export default function Resouces(){

    return (
        <>
            <Header />
            <BlogPost />
            <Podcast />
        </>
    );    
}