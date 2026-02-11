import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const Footer = () => {
  return (
    <footer className="text-neutral-500 text-[14.4px] box-border caret-transparent leading-[23.04px] max-w-[648px] mx-[8%] my-[72px] md:mb-[108px] md:mx-[14%]">
      <SocialLinks />
      <div className="text-neutral-400 box-border caret-transparent">
        @ 2026 Supa Dupa Tools
      </div>
    </footer>
  );
};
