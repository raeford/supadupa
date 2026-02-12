import { BackgroundWrapper } from "@/components/BackgroundWrapper";

type PageContainerProps = {
  isDarkMode: boolean;
};

export const PageContainer = ({ isDarkMode }: PageContainerProps) => {
  return (
    <div className="box-border caret-transparent">
      <BackgroundWrapper isDarkMode={isDarkMode} />
    </div>
  );
};
