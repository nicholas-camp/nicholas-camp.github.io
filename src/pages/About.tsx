const About = () => (
    <div className="w-full h-full flex flex-col items-center px-6 py-20 gap-16">
        {/* Heading */}
        <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-3">About Me</h1>
            <div className="w-12 h-1 bg-gray-400 dark:bg-gray-600 mx-auto rounded-full" />
        </div>

        {/* Bio Section */}
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-center sm:text-left">
            <p>
                Hey! I’m <span className="font-semibold">Nick</span> — a developer who’s into thoughtful design, clean code, and making digital things that just feel right. I got into web development because I love building tools and experiences that actually help people.
            </p>

            <p>
                These days, I work mostly with <span className="font-medium text-sky-700 dark:text-sky-400">React</span>, <span className="font-medium text-indigo-700 dark:text-indigo-400">TypeScript</span>, and <span className="font-medium text-teal-700 dark:text-teal-400">Tailwind CSS</span>. I’m also comfortable with things like <span className="font-medium">Node.js</span>, <span className="font-medium">Figma</span>, and version control with <span className="font-medium">Git</span>.
            </p>

            <p>
                Lately, I’ve been focused on crafting scalable frontends — exploring better ways to structure applications, improve performance, and ensure accessibility is built in from the start. I’m especially interested in design systems and how thoughtful patterns can level up the dev experience for teams.
            </p>

            <p>
                I really enjoy working across the stack when needed, but I always come back to the frontend — it’s where code meets experience, and where small details make a big difference.
            </p>

            <p className="italic">
                Outside of coding, you’ll probably find me sketching UI ideas in a notebook, biking around the city to clear my head, or dialing in espresso shots like it’s a science.
            </p>
        </div>
    </div>
)



export default About
