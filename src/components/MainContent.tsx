import { ContentWrapper } from "@/components/ContentWrapper";

type MainContentProps = {
  isDarkMode: boolean;
};

export const MainContent = ({ isDarkMode }: MainContentProps) => {
  return (
    <main className="box-border caret-transparent">
      <ContentWrapper isDarkMode={isDarkMode} />
    </main>
  );
};
