import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";

type PostProps = {
    name: string;
    date: string;
    description: string;
    url: string;
};

const PostCard = ({ name, date, description, url }: PostProps) => {
    return (
        <Link
            to={`/posts/${url}`}
            className="w-full max-w-4xl p-6 mb-6 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
            <h2 className="text-3xl font-semibold mb-4">{name}</h2>

            <div className="flex items-center font-medium mb-4">
                <span className="mr-2">
                    <FaRegCalendarAlt />
                </span>
                <span>{new Date(date).toLocaleDateString()}</span>
            </div>

            <p className="mb-6">{description}</p>

            <span className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-300">
                Read more
            </span>
        </Link>
    );
};

export default PostCard;