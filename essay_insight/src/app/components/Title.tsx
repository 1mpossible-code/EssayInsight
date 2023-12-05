import logo from './Logo.svg';
import Image from 'next/image';

const Title = () => {
  return (
    <div className={'flex justify-center  relative top-[25px]'}>
      <Image src={logo} alt="Logo" className="relative right-1 h-14 w-14" />

      <div className="hidden sm:block">
        <center className="relative top-5 text-5xl font-medium leading-6">
          <h1 className={'text-primary'}>EssayInsight.</h1>
          <div className="rounded relative left-[23%] top-[7px]  h-[5px] bg-[#27253D] w-[56%]"></div>
        </center>
      </div>
    </div>
  );
};
export default Title;
