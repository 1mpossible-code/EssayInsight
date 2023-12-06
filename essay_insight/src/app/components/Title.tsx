import logo from './svg/Logo.svg';
import Image from 'next/image';

const Title = () => {
  return (
    <div className={'flex justify-center relative mt-16 mb-16'}>
      <Image
        src={logo}
        alt="Logo"
        className="relative sm:left-[80px] h-14 w-14"
      />

      <div className="hidden sm:block">
        <center className="relative top-5 text-5xl font-medium leading-6">
          <h1 className={'text-primary relative left-6'}>EssayInsight.</h1>
          <div className="rounded relative left-[22%] top-[7px] h-[5px] bg-[#27253D] w-[41%]"></div>
          <div className="flex justify-center relative top-[15px] text-sm font-extralight">
            <p>Precision Short-Essay Grading with Advanced Machine Learning </p>
          </div>
        </center>
      </div>
    </div>
  );
};
export default Title;
