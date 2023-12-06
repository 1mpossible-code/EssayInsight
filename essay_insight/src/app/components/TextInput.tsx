const TextInput = () => {
  return (
    <div className=" text-[#F5F5C6] p-[5px] py-2 lg:w-[30vw] w-[52.5vw] h-[36vh] rounded-lg mx-auto relative top-[7rem] bg-[#93C291;] ">
      <form action="">
        <textarea className="text-xs  w-full h-[28vh]  bg-[#789F76] rounded-lg h-3/4" />
        <div className="flex font-medium justify-between">
          <button className="text-[12px]   bg-secondary p-2 py-[5px] rounded-lg">
            Evaluate
          </button>
          <div className="flex  ">
            <h4 className="relative right-1 top-[2.5px] text-[14px]">Score:</h4>
            <div className="rounded-lg py-[2px] px-2 flex bg-[#789F76]">
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
