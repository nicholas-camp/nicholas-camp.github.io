import HelloFromReact from "../components/HelloFromReact";
import AnotherPost from "../components/AnotherPost";

const posts = [
    {
        name: "Hello from React",
        url: "hello-from-react",
        date: "2025-04-15",
        content: "This is the full content of the post.",
        component: HelloFromReact,
    },
    {
        name: "Another Post",
        url: "another-post",
        date: "2025-04-10",
        content: "Here’s some longer content for the second post.",
        component: AnotherPost,
    },
];

export default posts;
