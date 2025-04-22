import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";
import { FaRegCalendarAlt, FaArrowLeft } from "react-icons/fa";

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
        <div className="w-full max-w-4xl mx-auto px-12 py-20 text-left">
            {/* Back arrow */}
            <Link
                to="/posts"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 mb-6 transition-colors duration-300"
            >
                <FaArrowLeft className="mr-2" />
                Back to Posts
            </Link>


            <h1 className="text-4xl font-bold mb-3">{name}</h1>
            <div className="flex items-center text-gray-500 dark:text-gray-400 font-medium mb-6 transition-colors duration-300">
                <span className="text-gray-500 dark:text-gray-400 mr-2">
                    <FaRegCalendarAlt />
                </span>
                <span>{new Date(date).toLocaleDateString()}</span>
            </div>
            <PostComponent />
        </div>
    );
};

export default PostPage;
