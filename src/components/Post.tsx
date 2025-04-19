import { Link } from "react-router-dom";

type PostProps = {
    name: string;
    date: string;
    content: string;
    url: string;
};

const Post = ({ name, date, content, url }: PostProps) => {
    return (
        <div className="w-full max-w-4xl p-5 mb-5 rounded-xl border border-gray-300 dark:border-gray-700 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800">

        <h2 className="text-3xl font-semibold mb-5">{name}</h2>
            <p className="font-medium text-gray-500 dark:text-gray-400 mb-5">
                {new Date(date).toLocaleDateString()}
            </p>
            <p className="mb-5 text-gray-700 dark:text-gray-300">{content}</p>


            <Link
                to={`/posts/${url}`}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
                Read more →
            </Link>
        </div>
    );
};

export default Post;
