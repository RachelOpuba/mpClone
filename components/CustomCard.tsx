import { IconType } from "react-icons";
import { useState } from "react";

type CustomCardProps = {
  icon: IconType | string;
  iconSize?: string;
  commingSoon?: boolean;
  padding?: string;
  heading: string;
  text?: string;
  buttonText?: string;
  buttonOnClick?: () => void;
};

const CustomCard: React.FC<CustomCardProps> = ({
  icon: Icon,
  iconSize = "text-base",
padding = 'p-0',
  heading,
  commingSoon,
  text,
  buttonText,
  buttonOnClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg flex gap-4 rounded-s-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`h-[44px] w-[44px] flex justify-center items-center  rounded-full  ${
          isHovered ? "bg-[#0357ee]" : "bg-[#c4e9fd]"
        } relative`}
      >
        <Icon
          className={`${iconSize}  ${
            isHovered ? "text-white" : "text-gray-600"
          }`}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
        <h6
          className={`font-semibold  ${padding} ${
            isHovered ? "text-[#0357ee]" : "text-[#031335]"
          }`}
        >
          {heading}
          
        </h6>
        {commingSoon && (
            <small className="bg-[#fff0c2] text-[#030b1d] px-2 text-[10px] rounded-full font-semibold">
              Coming soon
            </small>
          )}        </div>
        <p className="text-[#3e588e] text-[12px]">{text}</p>
        {buttonText && (
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={buttonOnClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomCard;
