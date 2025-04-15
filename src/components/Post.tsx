import { Link } from "react-router-dom";

type PostProps = {
    name: string;
    date: string;
    content: string;
    url: string;
};

const Post = ({ name, date, content, url }: PostProps) => {
    return (
        <div className="w-full max-w-2xl p-6 mb-4 border rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold">{name}</h2>
            <p className="text-sm text-gray-500 mb-4">{new Date(date).toLocaleDateString()}</p>
            <p className="text-gray-700 mb-4">{content}</p>
            <Link to={`/posts/${url}`} className="text-blue-500">
                Read more
            </Link>
        </div>
    );
};

export default Post;
