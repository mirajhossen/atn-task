import { Clock } from "lucide-react";

const NewsCard = ({ item }) => {
  const { img, title, description, time } = item;
  return (
    <div className="p-2.5 flex flex-col gap-2.5">
      <img src={img} alt="" />
      <h1 className="text-[18px] font-medium">{title}</h1>
      <p className="text-base text-[#4B4B4B]">{description}</p>
      <div className="flex gap-1 ">
        <span>
          <Clock />
        </span>
        <span className="text-sm text-[#868686]">{time} মিনিট আগে</span>
      </div>
    </div>
  );
};

export default NewsCard;
