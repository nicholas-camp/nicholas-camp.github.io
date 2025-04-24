import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";
import { FaRegCalendarAlt, FaArrowLeft } from "react-icons/fa";

const Post = () => {
    const { url } = useParams<{ url?: string }>();

    if (!url || !posts.find((p) => p.url === url)) {
        return (
            <div className="w-full max-w-4xl mx-auto px-12 py-8 text-left">
                <Link to="/posts" className="flex items-center mb-8">
                    <FaArrowLeft className="mr-2" />
                    Back to Posts
                </Link>
                <div className="flex items-center justify-center text-5xl font-bold text-center">
                    Post not found
                </div>
            </div>

        );
    }

    const post = posts.find((p) => p.url === url)!;
    const { name, date, post: PostComponent } = post;

    return (
        <div className="w-full max-w-4xl mx-auto px-12 py-8 text-left">
            <Link to="/posts" className="flex items-center mb-8">
                <FaArrowLeft className="mr-2" />
                Back to Posts
            </Link>
            <h1 className="text-4xl font-bold mb-3">{name}</h1>
            <div className="flex items-center font-medium mb-6 transition-colors duration-300">
                <FaRegCalendarAlt className="mr-2" />
                <span>{new Date(date).toLocaleDateString()}</span>
            </div>
            <PostComponent />
        </div>
    );
};

export default Post;
