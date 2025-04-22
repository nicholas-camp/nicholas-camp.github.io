import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";

type PostProps = {
    name: string;
    date: string;
    content: string;
    url: string;
};

const Post = ({ name, date, content, url }: PostProps) => {
    return (
        <Link
            to={`/posts/${url}`}
            className="w-full max-w-4xl p-5 mb-5 rounded-xl border border-gray-300 dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-800 block"
        >
            <h2 className="text-3xl font-semibold mb-5">{name}</h2>

            <div className="flex items-center text-gray-500 dark:text-gray-400 font-medium mb-5 transition-colors duration-300">
                <span className="text-gray-500 dark:text-gray-400 mr-2">
                    <FaRegCalendarAlt />
                </span>
                <span>{new Date(date).toLocaleDateString()}</span>
            </div>

            <p className="mb-5 text-gray-700 dark:text-gray-300 transition-colors duration-300">{content}</p>

            <span className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-300">
                Read more
            </span>
        </Link>
    );
};

export default Post;
