import blog from "../../public/projects/blog.png"
import chatgpt from "../../public/projects/chatgpt.png"
import movieRate from "../../public/projects/movieRate.png"

const projects = [

  {
    name: "Blog",
    description:
      "Web-based Blog Website, allow us to read, create, update, Delete, in real-time, and also allow us to share our thoughts with others.",
    tags: [
      {
        name: "next.js",
        color: "#FFFFFF",
      },
      {
        name: "graphql CMS",
        color: "green",
      },
      {
        name: "tailwind",
        color: "pink",
      },
      
    ],
    image: blog,
    source_code_link: "https://github.com/satyendramourya/gamersandgeeks",
    live:"https://www.gamersandgeeks.works/"
  },
   {
    name: "Movie-Review",
    description:`A movie review website where users can search for movies, read reviews, and IMDB ratings. It's a user-friendly way to stay informed and connected to the latest movies.Having trouble selecting your next movie? We've got you covered.`,
    tags: [
      {
        name: "react",
        color: "pink",
      },
      {
        name: "redux",
        color: "#FFFFFF",
      },
      {
        name: "scss",
        color: "red",
      },
      {
        name: "rest-api",
        color: "#2AE98C",
      },
    ],
    image: movieRate,
    source_code_link: "https://github.com/satyendramourya/MovieRate",
    live:"https://movie-rate-woad.vercel.app/"
  },
  {
    name: "Chat gpt3 morden ui",
    description:
      "A modern UI landing page built from scratch. This responsive website features sleek design, intuitive navigation, and engaging content to create a memorable user experience. Check it out and let me know what you think!",
    tags: [
      {
        name: "react",
        color: "#FFFFFF",
      },
      {
        name: "css",
        color: "#2AE98C",
      },
    ],
    image: chatgpt,
    source_code_link: "https://github.com/satyendramourya/Chat-gpt3",
    live:"https://chat-gpt3-pi.vercel.app/"
  },
    
];


export default projects;