import PostCard from "../components/PostCard.tsx";
import posts from "../data/posts";

const Posts = () => {
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="w-full h-full flex flex-col items-center px-12 pt-12 pb-6">
            <h1 className="text-5xl font-bold tracking-tight mb-4">Posts</h1>
            <div className="w-12 h-1 bg-gray-300 dark:bg-gray-500 mx-auto rounded-full mb-5" />
            <p className="max-w-4xl text-center text-lg mb-7">
                A collection of my thoughts, ideas, and learnings.
            </p>
            {sortedPosts.map((post) => (
                <PostCard key={post.url} {...post} />
            ))}
        </div>
    );
};

export default Posts;
