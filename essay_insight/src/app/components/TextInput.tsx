"use client"
import { useState } from "react";

const TextInput = () => {
  const [essay, setEssay] = useState("");
  const [prediction, setPrediction] = useState<number | null>(6);

  const handleEvaluate = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("http://0.0.0.0:5001/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ essay }),
      });
      const data = await response.json();
      console.log(data);
      setPrediction(data.prediction/9*100);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className=" shadow-lg z-50 mt-16 text-[#F5F5C6] p-1 py-2 md:w-[320px] lg:w-[500px] w-11/12 mx-auto h-[36vh] rounded-lg mx-auto bg-[#93C291] ">
      <form>
        <textarea
          className="p-1 placeholder-slate-50 text-white text-lg  w-full h-[26.5vh]  bg-[#789F76] rounded-lg h-3/4"
          placeholder="Nostrud sit cupidatat id nostrud deserunt dolore adipisicing Lorem. Aliqua elit nostrud laborum id amet irure sunt. Laboris occaecat labore commodo proident."
          value={essay}
          onChange={(e) => setEssay(e.target.value)}
        />
        <div className="flex font-medium justify-between">
          <button
            className="text-lg bg-secondary p-2 py-[5px] rounded-lg"
            onClick={handleEvaluate}
          >
            Evaluate
          </button>
          <div className="flex gap-3 items-center">
            <h4 className="text-md">Score:</h4>
            <div className="rounded-lg py-2 px-3 flex text-lg bg-[#789F76]">
              <h2>%</h2>
              <h2>{prediction !== null ? prediction.toFixed(1) : "00"}</h2>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TextInput;
