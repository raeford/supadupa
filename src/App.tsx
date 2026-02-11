import { PageContainer } from "@/components/PageContainer";
import { ThoughtsBuildingDigitalMindPage } from "@/pages/thoughts/ThoughtsBuildingDigitalMindPage";

export const App = () => {
  const isThoughtPage =
    window.location.pathname === "/beginnings" ||
    window.location.pathname === "/thoughts/building-a-digital-mind";

  return (
    <body className="text-zinc-900 text-lg not-italic proportional-nums font-normal accent-auto bg-gray-100 box-border caret-transparent block tracking-[-0.27px] leading-[28.8px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sn_pro">
      {isThoughtPage ? <ThoughtsBuildingDigitalMindPage /> : <PageContainer />}
      <div className="box-border caret-transparent"></div>
    </body>
  );
};
