export const Article = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <article className="box-border caret-transparent tracking-[-0.36px] max-w-[756px] mt-36 mb-[108px] mx-[8%] md:mx-[14%]">
      <div className="text-[16.2px] box-border caret-transparent leading-[25.92px] opacity-80">
        <span className="bg-[#F3A732] box-border caret-transparent inline-block basis-2 shrink-0 h-2 w-2 mr-2 rounded-[50%]"></span>
        <time className="box-border caret-transparent">January 1st, 2025.</time>
      </div>

      <h1 className="text-4xl font-medium text-zinc-900 dark:text-white box-border caret-transparent tracking-[-1.08px] leading-[43.2px] ml-[-1.8px] my-[18px]">
        Sharper tools, smoother days.
      </h1>

      <div className="box-border caret-transparent">
        <p className="text-neutral-600 dark:text-zinc-200 box-border caret-transparent my-[18px]">
          <small className="text-neutral-500 dark:text-zinc-300 text-[14.4px] box-border caret-transparent block leading-[20.16px] max-w-xs opacity-80 ml-px">
            tl;dr: we make tools that get it done.
            <br />
            build less friction.
          </small>
        </p>

        <p className="text-neutral-600 dark:text-zinc-200 box-border caret-transparent my-[18px]">
          Supa Dupa Tools started the way most good tools do: out of mild irritation and a refusal to keep doing things the hard way. Somewhere between juggling study goals, wrangling messy files on a Mac, and repeating the same "there has to be a better way" tasks, a pattern showed up - tiny frictions add up, and the internet is full of "solutions" that feel like homework.
        </p>

        <p className="text-neutral-600 dark:text-zinc-200 box-border caret-transparent my-[18px]">
          <mark className="text-black dark:text-white bg-transparent bg-[linear-gradient(-80deg,rgba(243,167,50,0.08),rgba(243,167,50,0.25)_90%,rgba(243,167,50,0.15))] box-border caret-transparent mb-[-3px] mt-[-3px] -mx-1.5 px-1.5 py-[3px] rounded-tl-[7.2px] rounded-tr-[18px] rounded-br-[10.8px] rounded-bl-[18px]">
            So we decided to build our own.
          </mark>{" "}
          Not a big corporate suite. Not a bloated platform. Just small, well-made tools that quietly make life easier.
        </p>

        <p className="text-neutral-600 dark:text-zinc-200 box-border caret-transparent my-[18px]">
          Our mission is simple: turn everyday effort into smooth, satisfying progress - whether you’re studying for a certification with CertDen, cleaning up your digital clutter with butta, or using any future little helper we dream up next.
          <span className="underline decoration-[#F3A732] decoration-2 underline-offset-4"> We design for real people, real constraints, and real momentum:</span>{" "}
          clean interfaces, thoughtful defaults, and results you can feel.
        </p>

        <p className="text-neutral-600 dark:text-zinc-200 box-border caret-transparent my-[18px]">
          We’re serious about craft, but not about pretending we’re serious. If a tool saves you time, reduces stress, and makes you think "wow, that was painless," it’s doing its job - and so are we.
        </p>

        <div className="box-border caret-transparent max-w-[150px] ml-px mt-9">
          <img
            src={`${baseUrl}images/signiture.png`}
            alt="Signature"
            className="box-border caret-transparent max-w-xs w-full rounded-[10px]"
          />
        </div>

        <p className="text-neutral-600 dark:text-zinc-200 box-border caret-transparent my-[10px] max-w-[150px] ml-px text-center">
          <small className="text-neutral-500 dark:text-zinc-300 text-[14.4px] box-border caret-transparent block leading-[20.16px]">
            - supa dupa Jas
          </small>
        </p>
      </div>
    </article>
  );
};
