import { MainContent } from "@/components/MainContent";
import { Footer } from "@/sections/Footer";

export const BackgroundWrapper = () => {
  return (
    <div className="relative box-border caret-transparent min-h-[1000px] overflow-hidden">
      <MainContent />
      <hr className="text-zinc-500 border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 border-t-zinc-300 box-border caret-transparent mx-[10%] border-b-0 border-x-0" />
      <Footer />
    </div>
  );
};
