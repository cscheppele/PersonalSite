import styles from "@/styles/About.module.css";

// Each string is one paragraph. Add, remove or reorder freely.
const paragraphs = [
    "I grew up in a military family as one of five siblings, moving every few years before eventually settling in Colorado. Constantly adapting to new environments taught me how to learn quickly, connect with different people, and take on new challenges.",

    "I attended Oklahoma State University, where I earned degrees in Psychology and Spanish and spent a year studying abroad in Teruel, Spain. Those experiences strengthened my communication skills, broadened my perspective, and sparked a lifelong fascination with languages. That interest has continued to grow over the years, expanding beyond Spanish to French, German, Portuguese, and eventually programming languages as well. Apparently, if a system has grammar, structure, and a way to communicate ideas, I want to learn it.",

    "After college, I spent several years working in customer service and hospitality, primarily as a bartender in Colorado and Texas. While the work sharpened my problem-solving abilities and people skills, I discovered a growing interest in technology and software development.",

    "During the pandemic, what began as curiosity about game development evolved into a serious commitment to learning programming. I started building projects, collaborating with developer friends, and eventually completed a software engineering bootcamp in Spain to accelerate my transition into the industry.",

    "Today, I'm focused on growing as a software developer, building meaningful applications, and continuing to learn. Whether the language is spoken, written, mathematical, or compiled, I enjoy the challenge of understanding how complex ideas can be translated into something others can use. Outside of programming, you'll usually find me playing volleyball, traveling, gaming, or spending time around horses whenever I get the chance.",
];

export default function About() {
    return (
        <main className={styles.main}>
            <div className={styles.story}>
                {paragraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                ))}
            </div>
        </main>
    );
}
