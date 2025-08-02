// This interface defines the shape of a single project object.
export interface Project {
  title: string;
  image: string;
  tag: string;
  tagColor: string;
  borderColor: string;
  liveLink: string;
  githubLink: string;
}

// An array of your project data. Keeping it here makes it easy to add, remove, or update projects.
export const projects: Project[] = [
  {
    title: "Rush Bite - Food Delivery App",
    image: "/assets/projects/rush-bite.png",
    tag: "React & Redux",
    tagColor: "bg-blue-400 dark:bg-blue-600",
    borderColor: "border-blue-500 dark:border-blue-700",
    liveLink: "https://rushbite.vercel.app/",
    githubLink: "https://github.com/Waahguptaji/Rush-Bite",
  },
  {
    title: "Hooked - Online Music App",
    image: "/assets/projects/hooked.png",
    tag: "React & Spotify API",
    tagColor: "bg-green-400 dark:bg-green-600",
    borderColor: "border-green-500 dark:border-green-700",
    liveLink: "https://hooked.vercel.app/",
    githubLink: "https://github.com/Waahguptaji/hooked-app",
  },
  {
    title: "Pixel Technology Website",
    image: "/assets/projects/pixel-tech.png",
    tag: "Next.js",
    tagColor: "bg-pink-400 dark:bg-pink-600",
    borderColor: "border-pink-500 dark:border-pink-700",
    liveLink: "https://pixeltechnology.in/",
    githubLink: "https://github.com/Waahguptaji/pixel-tech-website-revamp",
  },
  {
    title: "Weather App",
    image: "/assets/projects/weather-app.png",
    tag: "React & Weather API",
    tagColor: "bg-yellow-400 dark:bg-yellow-600",
    borderColor: "border-yellow-500 dark:border-yellow-700",
    liveLink: "https://weather-app-iota-gilt-56.vercel.app/",
    githubLink: "https://github.com/Waahguptaji/weather-app",
  },
];
