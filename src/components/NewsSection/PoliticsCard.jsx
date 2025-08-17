import { Clock } from "lucide-react";

const PoliticsCard = ({ item }) => {
  const { img, title, time } = item;
  return (
    <div className="p-2.5 flex gap-2.5">
      <div className="w-[50%] h-[100px]">
        <img className="w-full h-full" src={img} alt="" />
      </div>
      <div className="w-[50%]">
        <h1 className="text-[18px] font-medium">{title}</h1>

        <div className="flex gap-1 ">
          <span>
            <Clock />
          </span>
          <span className="text-sm text-[#868686]">{time} ঘণ্টা আগে</span>
        </div>
      </div>
    </div>
  );
};
export default PoliticsCard;
