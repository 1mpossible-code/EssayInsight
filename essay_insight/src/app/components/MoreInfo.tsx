import Image from 'next/image';
import logo from './svg/Logo.svg';

const MoreInfo = () => {
  return (
    <div className="z-30 bg-[#326765] h-auto flex justify-between p-5 pr-0">
      <p className="text-[#F5F5C6] w-1/2 text-sm py-auto">
        "EssayInsight" is a dynamic web application tailored for IELTS
        preparation, focusing on grading essays ranging from 150 to 300 words,
        with optimal functionality for essays around 280 words. Currently, it
        specializes in providing accurate scores, reflecting a comprehensive
        understanding of IELTS grading standards.
      </p>
      <Image src={logo} alt="Logo" className="relative scale-50 " />
    </div>
  );
};
export default MoreInfo;
