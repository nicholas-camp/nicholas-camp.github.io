import Post from "../components/Post";
import posts from "../data/posts";


const Posts = () => {
    // Sort posts by date descending (newest first)
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="w-full h-full flex flex-col items-center px-12 pt-20 pb-5 overflow-auto">
            <h1 className="text-5xl font-bold tracking-tight mb-4">Posts</h1>

            <div className="w-12 h-1 bg-gray-300 dark:bg-gray-500 mx-auto rounded-full mb-6" />
            <p className="max-w-4xl text-center text-lg mb-6">
                A collection of my thoughts, ideas, and learnings.
            </p>
            {sortedPosts.map((post) => (
                <Post key={post.url} {...post} />
            ))}

        </div>

    );
};

export default Posts;
