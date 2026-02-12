import { MainContent } from "@/components/MainContent";
import { Footer } from "@/sections/Footer";

type BackgroundWrapperProps = {
  isDarkMode: boolean;
};

export const BackgroundWrapper = ({ isDarkMode }: BackgroundWrapperProps) => {
  return (
    <div className="relative box-border caret-transparent min-h-[1000px] overflow-hidden">
      <MainContent isDarkMode={isDarkMode} />
      <hr className="text-zinc-500 border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 border-t-zinc-300 border-dotted box-border caret-transparent mx-[10%] border-b-0 border-x-0 dark:border-zinc-600 dark:text-zinc-500" />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};
