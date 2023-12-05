const Corner = () => {
  return (
    <div>
      <div className="absolute top-[0] left-[-100px]">
        <div className="relative left-[100px] bottom-[120px] left-[110px] w-[200px] h-[200px] bg-[#93C291] rounded-full"></div>
        <div className="relative  right-[20px] bottom-[150px] w-[200px] h-[200px] bg-[#326765] rounded-full"></div>
        <div className="absolute  bottom-[250px] w-[200px] h-[200px] bg-[#27253D] rounded-full"></div>
      </div>

      <div className=" absolute overflow-hidden	 bottom-[0] right-[0px]">
        <div className="relative left-[35mm] top-[50mm] bottom-0  w-[200px] h-[200px] bg-[#93C291] rounded-full"></div>
        <div className="relative right-0 top-[120px] w-[200px] h-[200px] bg-[#326765] rounded-full"></div>
        <div className="absolute  -bottom-[20mm] -right-[0] left-[70px] w-[200px] h-[200px] bg-[#27253D] rounded-full"></div>
      </div>
    </div>
  );
};
export default Corner;
