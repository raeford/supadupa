import { Article } from "@/pages/thoughts/Article";

export const ThoughtsBuildingDigitalMindPage = () => {
  return (
    <div className="relative box-border caret-transparent min-h-[1000px] overflow-hidden">
      <nav className="absolute text-zinc-500 text-[14.4px] box-border caret-transparent leading-[23.04px] text-left w-full z-[120] mt-9 mx-[8%] top-0 md:mx-9">
        <a
          aria-label="Home"
          href="./"
          className="box-border caret-transparent leading-[17.1px] hover:text-zinc-900 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500"
        >
          <img
            src="images/supadupa-color-a.png"
            alt="Supa Dupa logo"
            className="box-border caret-transparent -ml-1 h-10 w-auto"
          />
        </a>
      </nav>
      <main className="box-border caret-transparent">
        <Article />
      </main>
      <hr className="text-zinc-500 border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 border-t-zinc-300 box-border caret-transparent mx-[10%] border-b-0 border-x-0" />
      <footer className="text-neutral-500 text-[14.4px] box-border caret-transparent leading-[23.04px] max-w-[648px] mx-[8%] my-[72px] md:mb-[108px] md:mx-[14%]">
        <div className="box-border caret-transparent -ml-2 mb-2.5 flex flex-row items-center gap-4">
          <div className="box-border caret-transparent flex flex-row items-center gap-1.5">
            <a
              href="https://twitter.com/tobiaswhetton"
              className="box-border caret-transparent leading-[17.1px] p-0.5 hover:text-zinc-900 hover:border-b-zinc-900"
            >
              <img
                src="https://c.animaapp.com/mlihhxal1TBSah/assets/icon-2.svg"
                alt="Icon"
                className="box-border caret-transparent h-[30px] w-[30px]"
              />
            </a>
            <a
              href="https://linkedin.com/in/twhetton"
              className="box-border caret-transparent leading-[17.1px] p-0.5 hover:text-zinc-900 hover:border-b-zinc-900"
            >
              <img
                src="https://c.animaapp.com/mlihhxal1TBSah/assets/icon-3.svg"
                alt="Icon"
                className="box-border caret-transparent h-[30px] w-[30px]"
              />
            </a>
            <a
              href="https://threads.net/@tobiaswhetton"
              className="box-border caret-transparent leading-[17.1px] p-0.5 hover:text-zinc-900 hover:border-b-zinc-900"
            >
              <img
                src="https://c.animaapp.com/mlihhxal1TBSah/assets/icon-4.svg"
                alt="Icon"
                className="box-border caret-transparent h-[30px] w-[30px]"
              />
            </a>
            <a
              href="https://layers.to/tobias"
              className="box-border caret-transparent leading-[17.1px] p-0.5 hover:text-zinc-900 hover:border-b-zinc-900"
            >
              <img
                src="https://c.animaapp.com/mlihhxal1TBSah/assets/icon-5.svg"
                alt="Icon"
                className="box-border caret-transparent h-[30px] w-[30px]"
              />
            </a>
          </div>
          <a
            href="mailto:hello@supadupa.tools"
            className="inline-flex h-[30px] items-center rounded-xl border border-zinc-300 bg-zinc-100 px-3 text-[14px] leading-none text-zinc-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] hover:bg-white"
          >
            Get in touch &#8250;
          </a>
        </div>
        <div className="text-neutral-400 box-border caret-transparent">
          @ 2026 Supa Dupa Tools
        </div>
      </footer>
    </div>
  );
};
