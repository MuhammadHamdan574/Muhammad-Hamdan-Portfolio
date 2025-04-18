import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import dotnetcore from "../../public/dotnetcore.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: reactjs,
      name: "ReactJS",
      description:
        "ReactJS, a powerful library for building dynamic user interfaces.",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      description:
        "Express.js, a minimal and fast Node.js web application framework.",
    },

    {
      id: 3,
      logo: nodejs,
      name: "NodeJS",
      description:
        "NodeJS, a JavaScript runtime built for fast, scalable network applications.",
    },
    {
      id: 4,
      logo: mongoDB,
      name: "MongoDB",
      description:
        "MongoDB, a flexible NoSQL database designed for scalability and performance.",
    },

    {
      id: 5,
      logo: dotnetcore,
      name: "DotNet Core",
      description:
        ".Net Core, a high performance framework for building modern applications.",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto"
                alt={name}
              />
              <div className="text-center">
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{description}</p>
              </div>
              <div className="flex justify-center px-6 py-4 space-x-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
