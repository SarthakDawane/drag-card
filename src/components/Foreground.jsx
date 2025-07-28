import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      name: "Ankita",
      desc: "A relentless dreamer with a fire that refuses to fade no matter the odds, she rise, rebuild and rewrite her story with with purpose.",
      file: "1020 mb", close: false, tag:{isOpen: true, tagTitle: "Download Now", tagColor:"blue"},
    },
    {
      name: "Sarthak",
      desc: "Life is not to live longer and getting only good experiences, it also gives you the worst downfall sometimes just learn from it.",
      file: "1 gb", close: true, tag:{isOpen: true, tagTitle: "Change Thought", tagColor:"green"},
    },
    {
      name: "Vishal",
      desc: "Learning are not always neccessary but failure is very important to grow bigger in you life thoughts.",
      file: "50 mb", close: false, tag:{isOpen: true, tagTitle: "Download Now", tagColor:"blue"},
    },
    {
      name: "Ashish",
      desc: "Don't change your lifestyle depending upon a girl change the girl depending on your lifestyle.",
      file: ".5 tb", close: true, tag:{isOpen: true, tagTitle: "Change Thought", tagColor:"green"},
    },
  ];

  return (
    <div ref={ref} className="w-full h-screen fixed z-[3] top-0 left-0 p-5 flex gap-5 flex-wrap">
      {data.map((item, index)=>(
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
