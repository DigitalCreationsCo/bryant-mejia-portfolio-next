'use client';
import * as Icon from '@phosphor-icons/react';

export default function Home() {
  // useEffect(() => {
  //   //   function updateOuterGradient(event: MouseEvent) {
  //   //     const gradientDiv = document.getElementById('outer-gradient');
  //   //     if (!gradientDiv) return;
  //   //     const mouseX = event.clientX;
  //   //     const mouseY = event.clientY;

  //   //     // Get the dimensions of the window
  //   //     const windowWidth = window.innerWidth;
  //   //     const windowHeight = window.innerHeight;

  //   //     // Calculate the position of the mouse relative to the center of the window
  //   //     const offsetX = (mouseX / windowWidth - 0.5) * windowWidth;
  //   //     const offsetY = (mouseY / windowHeight - 0.5) * windowHeight;

  //   //     // Set the background position to center the gradient on the mouse pointer
  //   //     gradientDiv.style.backgroundPosition = offsetX + 'px ' + offsetY + 'px';
  //   //     gradientDiv.style.backgroundRepeat = 'no-repeat';
  //   //   }

  //   function updateInnerGradient(event: MouseEvent) {
  //     const gradientDiv = document.getElementById('inner-gradient');
  //     if (!gradientDiv) return;
  //     const mouseX = event.clientX;
  //     const mouseY = event.clientY;

  //     // Get the dimensions of the window
  //     const windowWidth = window.innerWidth;
  //     const windowHeight = window.innerHeight;

  //     // Calculate the position of the mouse relative to the center of the window
  //     const offsetX = (mouseX / windowWidth - 0.5) * windowWidth;
  //     const offsetY = (mouseY / windowHeight - 0.5) * windowHeight;

  //     // Set the background position to center the gradient on the mouse pointer
  //     gradientDiv.style.backgroundPosition = offsetX + 'px ' + offsetY + 'px';
  //     gradientDiv.style.backgroundRepeat = 'no-repeat';
  //   }

  //   //   // Event listener for mousemove event
  //   //   document.addEventListener('mousemove', updateOuterGradient);
  //   document.addEventListener('mousemove', updateInnerGradient);

  //   () => {
  //     // document.removeEventListener('mousemove', updateOuterGradient);
  //     document.removeEventListener('mousemove', updateInnerGradient);
  //   };
  // }, []);

  return (
    <main
      id="outer-gradient"
      className="overflow-clip flex min-h-screen flex-col items-center justify-between p-12 px-16 bg-gradient-radial from-blue-500 bg-blue-700 text-white tracking-tight"
    >
      <section className="z-10 w-full items-center justify-between font-mono lg:flex">
        <p className="text-[2em]">
          <a href="/">Bryant Mejia</a>
        </p>
        <div className="flex flex-row space-x-5">
          <a
            href="https://twitter.com/_bryantmejia"
            className="hover:text-orange-400"
            target="_blank"
          >
            <Icon.XLogo size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/bryant-mejia-830425251/"
            className="hover:text-orange-400"
            target="_blank"
          >
            <Icon.LinkedinLogo size={32} />
          </a>
        </div>
      </section>

      <section
        id="inner-gradient"
        className="ml-auto max-w-7xl py-52 bg-orange-400 bg-clip-text"
      >
        <h2 className="text-[8em] leading-[1em] font-black text-transparent z-10">
          Frontend / Fullstack developer based in New York City.
        </h2>
      </section>

      <section className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left border-t">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </section>
    </main>
  );
}
