import Post from "../components/Post";
import posts from "../data/posts";

const Posts = () => {
    // Sort posts by date descending (newest first)
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="w-full h-full flex flex-col items-center px-12 pt-20 pb-5 overflow-auto">
            <h1 className="text-5xl font-bold tracking-tight mb-4">Blog Posts</h1>

            <div className="w-12 h-1 bg-gray-300 dark:bg-gray-500 mx-auto rounded-full mb-8" />
            <p className="max-w-2xl text-center text-lg mb-8">
                A showcase of things I’ve built — code, design, and ideas brought to life.
            </p>
            {sortedPosts.map((post) => (
                <Post key={post.url} {...post} />
            ))}

        </div>

    );
};

export default Posts;
