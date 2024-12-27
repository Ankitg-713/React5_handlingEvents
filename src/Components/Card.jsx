import React from "react";

function Card() {
  const data = [
    {
      name: "Mahiya Ve",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quidem magnam exercitationem?",
    },
    {
      name: "Junoon",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quidem magnam exercitationem?",
    },
  ];

  //two types to handle events or onclick or any event
  const handleClickAdd = () => {
    alert("Added to playlist!");
  };

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center">
      {data.map((item, index) => (
        <div className="w-85 px-3 py-2 bg-zinc-100 rounded-md">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs mt-2">{item.description}</p>
          <div className="flex gap-4">
            <button
              onClick={() => alert("Hello Ji")}
              className="px-3 py-1 bg-blue-500 rounded mt-3 text-sm text-zinc-100"
            >
              Download
            </button>
            <button
              onClick={handleClickAdd}
              className="px-3 py-1 bg-blue-500 rounded mt-3 text-sm text-zinc-100"
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
