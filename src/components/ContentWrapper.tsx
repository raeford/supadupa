export const ContentWrapper = () => {
  return (
    <div className="box-border caret-transparent max-w-[936px] ml-[14%] mr-[6%] mt-[10%] mb-[108px]">
      <section className="box-border caret-transparent">
        <div className="text-neutral-600 box-border caret-transparent gap-x-[27px] flex flex-col gap-y-[27px] mt-[54px] md:gap-x-9 md:flex-row md:gap-y-9">
          <div className="relative box-border caret-transparent flex w-fit">
            <div className="relative backdrop-blur-[10px] bg-white/90 shadow-[rgba(102,102,102,0.05)_0px_30px_20px_0px,rgba(102,102,102,0.03)_0px_20px_40px_0px,rgba(102,102,102,0.01)_0px_10px_80px_0px,rgba(255,255,255,0.99)_0px_0px_0px_1px_inset,rgba(0,0,0,0.04)_0px_0px_0px_2px] box-border caret-transparent max-w-full w-[297px] z-[2] -ml-4 mb-5 p-3.5 rounded-3xl md:bg-white md:shadow-[rgba(102,102,102,0.05)_0px_30px_20px_0px,rgba(102,102,102,0.03)_0px_20px_40px_0px,rgba(102,102,102,0.01)_0px_10px_80px_0px,rgba(255,255,255,0.99)_0px_0px_0px_1px_inset]">
              <img
                alt="Tobias"
                sizes="100vw"
                src="https://c.animaapp.com/mli9fyeniFSvCC/assets/2.png"
                className="text-transparent aspect-[auto_1950_/_1950] box-border max-w-full w-full rounded-[14px]"
              />
              <h1 className="text-black/80 text-[37.8px] font-bold box-border caret-transparent tracking-[-1.134px] leading-[41.58px] lowercase mt-[15px]">
                Tobias 
                <small className="text-lg font-normal box-border caret-transparent tracking-[-0.3px] leading-[19.8px] opacity-40 ml-[3px]">
                  San Francisco, USA
                </small>
              </h1>
              <p className="text-neutral-500 text-[15.48px] box-border caret-transparent leading-[24.768px]">
                Developer, designer &amp; climber
              </p>
            </div>
            <a
              href="https://delphi.ai/tobias"
              className="absolute text-black text-sm bg-orange-600/90 box-border caret-transparent block leading-[17.1px] max-w-fit opacity-90 translate-y-24 z-[1] mt-[50px] mb-10 pt-[30px] pb-2.5 px-[18px] rounded-xl bottom-10 hover:text-zinc-900 hover:border-neutral-500"
            >
              Chat with my{" "}
              <img
                src="https://c.animaapp.com/mli9fyeniFSvCC/assets/icon-1.svg"
                alt="Icon"
                className="box-border caret-transparent h-5 translate-y-[5px] w-5 -mr-px"
              />
              Delphi
            </a>
          </div>
        </div>
        <div className="text-neutral-600 box-border caret-transparent gap-x-[27px] flex flex-col gap-y-[27px] mt-[54px] md:gap-x-9 md:flex-row md:gap-y-9">
          <div className="box-border caret-transparent flex basis-[0%] flex-col grow">
            <h2 className="text-neutral-400 text-[12.6px] font-medium box-border caret-transparent tracking-[4.725px] leading-[30px] uppercase my-[10.458px]">
              Thoughts
            </h2>
            <a
              href="/thoughts/building-a-digital-mind"
              className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500"
            >
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1">
                Designing tomorrow’s digital mind
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden">
                I&#39;m joining Delphi to build an AI-first digital mind and
                help shape the future of AI and your knowledge.
              </div>
            </a>
          </div>
          <div className="box-border caret-transparent flex basis-[0%] flex-col grow">
            <h2 className="text-neutral-400 text-[12.6px] font-medium box-border caret-transparent tracking-[4.725px] leading-[30px] uppercase my-[10.458px]">
              Work
            </h2>
            <a
              href="https://delphi.ai/"
              className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500"
            >
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1">
                delphi platform
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden">
                intelligent digital profiles
              </div>
            </a>
            <a
              href="https://whetton.studio/"
              className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500"
            >
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1">
                whetton studio
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden">
                design &amp; development for startups
              </div>
            </a>
            <a
              href="https://experiencedcareers.com/"
              className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500"
            >
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1">
                experienced careers
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden">
                matching over 50s with sme&#39;s
              </div>
            </a>
            <a
              href="https://supernotes.app/"
              className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500"
            >
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1">
                supernotes app
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden">
                create shareable, markdown notecards
              </div>
            </a>
            <a
              href="https://supernotes.app/open-source/sn-pro/"
              className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500"
            >
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1">
                sn pro typeface
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden">
                a professional, rounded font family
              </div>
            </a>
          </div>
          <div className="box-border caret-transparent flex basis-[0%] flex-col grow">
            <h2 className="text-neutral-400 text-[12.6px] font-medium box-border caret-transparent tracking-[4.725px] leading-[30px] uppercase my-[10.458px]">
              FUN
            </h2>
            <a
              href="/icons"
              className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500"
            >
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1">
                Squircle-less Icons
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden">
                some fun, rectangular icons for ios
              </div>
            </a>
            <a
              href="https://hearthandout.com/"
              className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500"
            >
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1">
                heart handout
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden">
                like &amp; date people in real life
              </div>
            </a>
            <a
              href="https://playexposure.com/"
              className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500"
            >
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1">
                exposure game
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden">
                a fast-paced, daring party game
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
