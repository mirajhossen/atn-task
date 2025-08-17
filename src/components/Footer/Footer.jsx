const Footer = () => {
  return (
    <div className="px-4 w-full bg-[#01784B0D] flex justify-between items-center">
      <div>
        <img className="w-[101px] h-[84px]" src="/images/atn-logo.png" alt="" />
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
  );
};
export default Footer;
