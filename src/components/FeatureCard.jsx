import { skillList } from "../constants";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-1 flex-row p-6 rounded-[20px] ${
      index !== skillList.length - 1 ? "mb-6" : "mb-0"
    } bg-gray-900 feature-card transition`}
  >
    <div className="w-[64px] h-[64px] rounded-full flexCenter bg-dimWhite">
      <img src={icon} alt="star" className="w-[50px] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-[18px] leading-[23.4px] mb-1 text-white">
        {title}
      </h4>
      {content.map((content, index) => (
        <div key={content.contentName} className="flex flex-row gap-4 justify-start items-center text-white my-1">
          <img src={content.contentIcon} alt="icon" width={42} className="bg-white rounded-full p-1" />
          <p className="font-poppins font-normal text-[16px] leading-[24px]">{content.contentName}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCard;
