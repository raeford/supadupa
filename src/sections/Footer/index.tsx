import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const Footer = () => {
  return (
    <footer className="text-neutral-500 text-[14.4px] box-border caret-transparent leading-[23.04px] max-w-[648px] mx-[8%] my-[72px] md:mb-[108px] md:mx-[14%]">
      <SocialLinks />
      <div className="box-border caret-transparent">
        This site doesn&#39;t come with cookies. Want cookies?
        <a
          href="https://www.amazon.co.uk/s?k=cookies"
          className="border-b-stone-300 border-l-neutral-500 border-r-neutral-500 border-t-neutral-500 box-border caret-transparent leading-[17.1px] border-b hover:text-zinc-900 hover:border-b-neutral-500"
        >
          Get some here
        </a>
        .
      </div>
      <div className="text-neutral-400 box-border caret-transparent">
        © 2026 Tobias Whetton
      </div>
    </footer>
  );
};
