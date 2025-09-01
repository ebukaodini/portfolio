import { Project } from "@/interfaces/project";

export default [
  {
    title: "QuickFill",
    description:
      "QuickFill is a powerful form-filling tool built specifically for developers and testers who work with form-heavy websites.",
    tags: ["dev-tool", "chrome-extension"],
    image: "/projects/quickfill.png",
    url: "https://chromewebstore.google.com/detail/quickfill/kobolckihkgdmonegldakdhcmindhdbi",
    featured: true,
  },
  {
    title: "Matakai",
    description: "Matakai is a social media platform for immigrants.",
    tags: ["product", "social-media"],
    image: "/projects/matakai.png",
    url: "https://matakai.com",
    featured: true,
  },
  {
    title: "Spicy Guitar Academy",
    description:
      "An online platform for guitar enthusiasts to learn and master guitar playing through interactive lessons and exercises.",
    tags: ["product"],
    image: "/projects/spicyguitar.png",
    url: "https://github.com/ebukaodini/task-mgt",
    featured: false,
  },
  {
    title: "Task Mgt Board",
    description:
      "This is a simple Kanban board that allows you to drag and drop tasks between columns.",
    tags: ["hobby-proj"],
    image: "/projects/taskmgt.png",
    url: "https://github.com/ebukaodini/task-mgt",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects, skills, and experience as a developer.",
    tags: ["hobby-proj"],
    image: "/projects/portfolio.png",
    url: "",
    featured: false,
  },
] as Project[];
