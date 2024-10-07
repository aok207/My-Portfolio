import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="my-10 mx-auto w-2/3 md:w-[500px] flex flex-col gap-2 items-center text-center">
      <div className="flex gap-2 uppercase items-center">
        <Logo width={24} height={24} />
        <span className="font-bold text-sm">Aung Oo Khant</span>
      </div>
      <hr className="opacity-20 w-full" />
      <span>
        &copy; {new Date().getFullYear()} Aung Oo Khant. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
