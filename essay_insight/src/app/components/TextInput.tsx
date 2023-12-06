const TextInput = () => {
  return (
    <div className=" shadow-lg z-50 mt-16 text-[#F5F5C6] p-1 py-2 md:w-[320px] lg:w-[500px] w-11/12 mx-auto h-[36vh] rounded-lg mx-auto bg-[#93C291] ">
      <form action="">
        <textarea
          className="p-1 placeholder-slate-50 text-white text-lg  w-full h-[26.5vh]  bg-[#789F76] rounded-lg h-3/4"
          placeholder="Nostrud sit cupidatat id nostrud deserunt dolore adipisicing Lorem. Aliqua elit nostrud laborum id amet irure sunt. Laboris occaecat labore commodo proident."
        />
        <div className="flex font-medium justify-between">
          <button className="text-lg bg-secondary p-2 py-[5px] rounded-lg">
            Evaluate
          </button>
          <div className="flex gap-3 items-center">
            <h4 className="text-md">Score:</h4>
            <div className="rounded-lg py-2 px-3 flex text-lg bg-[#789F76]">
              <h2>%</h2>
              <h2>00</h2>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default TextInput;
