import Post from "../components/Post";
import posts from "../data/posts";

const Posts = () => {
    // Sort posts by date descending (newest first)
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="w-full flex flex-col items-center px-4 pt-8">
            <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
            {sortedPosts.map((post) => (
                <Post key={post.url} {...post} />
            ))}
        </div>
    );
};

export default Posts;
