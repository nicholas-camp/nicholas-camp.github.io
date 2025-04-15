import { useParams } from "react-router-dom";
import posts from "../data/posts";

const PostPage = () => {
    const { url } = useParams<{ url?: string }>();

    if (!url) {
        return <div>Post not found.</div>;
    }

    const post = posts.find((p) => p.url === url);

    if (!post) {
        return <div>Post not found.</div>;
    }

    const { name, date, component: PostComponent } = post;

    return (
        <div className="w-full max-w-3xl mx-auto px-4 py-8 text-left">
            <h1 className="text-4xl font-bold mb-2">{name}</h1>
            <p className="text-gray-500 mb-6">{new Date(date).toLocaleDateString()}</p>
            <PostComponent />
        </div>
    );
};

export default PostPage;
