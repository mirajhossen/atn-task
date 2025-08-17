const Footer = () => {
  return (
    <div>
      <div className="mt-2.5 px-4 w-full bg-[#01784B0D] flex justify-between items-center">
        <div>
          <img
            className="w-[101px] h-[84px]"
            src="/images/atn-logo.png"
            alt=""
          />
        </div>

        <div className="flex gap-2">
          <img
            className="w-[200px] h-[60px] object-contain"
            src="/images/google.png"
            alt=""
          />
          <img
            className="w-[200px] h-[60px] object-contain"
            src="/images/apple.png"
            alt=""
          />
        </div>
      </div>

      <div className="mx-auto my-2.5 h-[1px] w-[98%] bg-gray-400"></div>

      <div className="px-4 flex justify-between ">
        <div>
          <p>ড. মাহফুজুর রহমান</p>
          <p>চেয়ারম্যান ও ব্যবস্থাপনা পরিচালক</p>
          <div className="mt-2.5">
            <span></span>
            <p>৯৫ কাজী নজরুল এভিনিউ, কাওরান বাজার, ঢাকা-১২১৫, বাংলাদেশ।</p>
            <p className="mt-2.5">
              ফোনঃ <a href="tel:+8802818963033">+৮৮-০২ ৮১৮৯৬৩০-৩৩</a>
            </p>
          </div>
        </div>

        <div>
          <p className="text-xl">সোশ্যাল মিডিয়া</p>
          <div className="mt-2.5 flex gap-2.5">
            <img src="/images/linkedin.png" alt="" />
            <img src="/images/ytube.png" alt="" />
            <img src="/images/twiter.png" alt="" />
            <img src="/images/facebook.png" alt="" />
          </div>
        </div>
      </div>

       <div className="px-4 flex justify-end gap-2.5">
            <p className="p-[5px] border text-center">আমাদের কথা</p>
            <p className="p-[5px] border text-center">আপনার অভিজ্ঞতা</p>
            <p className="p-[5px] border text-center">আমাদের লক্ষ্য</p>
            <p className="p-[5px] border text-center">ভবিষ্যতের পরিকল্পনা</p>
          </div>
    </div>
  );
};
export default Footer;
