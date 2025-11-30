import { OrbitingCircles } from "./orbitingcircles";

export function Frameworks() {
  const skills = [
    { name: "python", src: "/assets/logos/python.png" },
    { name: "javascript", src: "/assets/logos/javascript.jpg" },
    { name: "typescript", src: "/assets/logos/typescript.png" },
    { name: "sql", src: "/assets/logos/sql.jpg" },
    { name: "html", src: "/assets/logos/html.JPG" },
    { name: "tailwindcss", src: "/assets/logos/tailwind-css-.png" },
    { name: "react", src: "/assets/logos/react_icon.jpg" },
    { name: "nextjs", src: "/assets/logos/nextjs.webp" },
    { name: "pandas", src: "/assets/logos/pandas.jpg" },
    { name: "numpy", src: "/assets/logos/numpy.png" },
    { name: "git", src: "/assets/logos/git.png" },
    { name: "vscode", src: "/assets/logos/vs code.jpg" },
    { name: "jupyter", src: "/assets/logos/jyputer.jpg" },
    { name: "streamlit", src: "/assets/logos/streamlit.png" },
    { name: "vercel", src: "/assets/logos/vesrsel.avif" },
    { name: "netlify", src: "/assets/logos/netlify-.jpg" },
    { name: "github", src: "/assets/logos/gihtub.jpg" },
    { name: "matplotlib", src: "/assets/logos/matplotlib.png" },
    { name: "expressjs", src: "/assets/logos/express.png" },
    { name: "nodejs", src: "/assets/logos/node.png" },
    { name: "bootstrap", src: "/assets/logos/bootstrap.jpg" },
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={skill.src} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} src={skill.src} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);