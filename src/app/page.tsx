'use client';
import * as Icon from '@phosphor-icons/react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    function updateInnerGradient(event: MouseEvent) {
      const gradientDiv = document.getElementById('inner-gradient');
      if (!gradientDiv) return;
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Get the dimensions of the window
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate the position of the mouse relative to the center of the window
      const offsetX = (mouseX / windowWidth - 0.5) * windowWidth;
      const offsetY = (mouseY / windowHeight - 0.5) * windowHeight;

      // Set the background position to center the gradient on the mouse pointer
      gradientDiv.style.backgroundPosition = offsetX + 'px ' + offsetY + 'px';
      gradientDiv.style.backgroundRepeat = 'no-repeat';
    }

    document.addEventListener('mousemove', updateInnerGradient);

    () => {
      document.removeEventListener('mousemove', updateInnerGradient);
    };
  }, []);

  return (
    <main
      id="outer-gradient"
      className="flex min-h-screen flex-col items-center justify-between p-12 px-16 bg-gradient-radial from-blue-500 bg-blue-700 text-white tracking-tight"
    >
      <section className="z-10 w-full items-center justify-between xl:flex">
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

      <section className="relative ml-auto w-full lg:max-w-7xl pt-16 pb-52 xl:pt-52 bg-clip-text bg-white">
        <h1 className="text-7xl xl:text-[8em] leading-[1em] font-black text-transparent">
          <span className="hover:text-orange-500">Frontend</span>
          <span className="hover:text-orange-500"> / </span>
          <span className="hover:text-orange-500">Fullstack</span>{' '}
          <span className="hover:text-orange-500">developer</span>{' '}
          <span className="hover:text-orange-500">based</span>{' '}
          <span className="hover:text-orange-500">in</span>{' '}
          <span className="hover:text-orange-500">New</span>{' '}
          <span className="hover:text-orange-500">York</span>
          <span className="hover:text-orange-500"> City.</span>
        </h1>
      </section>

      <Section>
        <h3 className="text-4xl whitespace-pre-line">
          {`I am a 5 year professional software engineer.
          I turn ideas 💡 
          into businesses. 💲💲💲`}
        </h3>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <ul className="col-span-1 bg-gradient-to-b from-orange-100 to-orange-300 bg-clip-text text-transparent">
            <li>
              <h3 className="text-4xl pb-4 text-white">{`Mastering Technology`}</h3>
            </li>
            <li>
              <p>Web Applications</p>
            </li>
            <li>
              <p>Distributed Systems</p>
            </li>
            <li>
              <p>Performance Testing</p>
            </li>
            <li>
              <p>Automation</p>
            </li>
            <li>
              <p>Security</p>
            </li>
            <li>
              <p>Typescript, Golang, Python</p>
            </li>
          </ul>

          <ul className="col-span-1 bg-gradient-to-b from-blue-100 to-blue-300 bg-clip-text text-transparent">
            <li>
              <h3 className="text-4xl pb-4 text-white">{`Inspiring People`}</h3>
            </li>
            <li>
              <p>Peer Mentorship</p>
            </li>
            <li>
              <p>Project Management</p>
            </li>
            <li>
              <p>Asynchronous Teams</p>
            </li>
            <li>
              <p>User Experience</p>
            </li>
            <li>
              <p>Customer Satisfaction</p>
            </li>
          </ul>
        </div>
      </Section>

      <Project
        projectNo="01"
        title="Gras"
        description="Gras is a platform that connects cannabis customers with businesses. It is a fullstack application that uses React, Node, and MongoDB."
        link="https://grascannabis.org"
      />

      <Project
        projectNo="02"
        title="TinyMail"
        description="TinyMail is an application for newsletter automation. It integrates with Google Sheets using OAuth2."
        link="https://tiny-mail.vercel.app"
      />

      <div className="w-full md:w-3/4 lg:max-w-5xl mb-4 lg:w-3/4 ml-auto mr-24 lg:text-right">
        <p>Previous Portfolios</p>
        <p>
          <a
            href="https://v1.bryantmejia.com"
            className="hover:text-orange-400"
          >
            v1
          </a>
        </p>
      </div>

      <Section>
        <p>
          &copy; 2024, Bryant Mejia
          <br />
          {`All works on this site are property of clients of Bryant Mejia and are featured with their express permission.`}
        </p>
      </Section>
    </main>
  );
}

const Section = ({ children }: any) => (
  <section className="w-full md:w-3/4 mb-48 lg:mb-80 lg:max-w-5xl lg:w-3/4 ml-auto mr-24 text-left border-t pt-12">
    {children}
  </section>
);

const Project = ({ projectNo, title, description, link }: any) => (
  <section className="w-full md:w-3/4 lg:max-w-5xl lg:w-3/4 ml-auto mr-24 mb-48 lg:mb-80 border-t pt-12">
    <p>{projectNo}</p>
    <div className="max-w-xl lg:mx-auto md:w-fit-content space-y-8">
      <div className="flex lg:justify-end items-center gap-4 lg:gap-10">
        <h3 className="text-6xl lg:text-9xl font-black lg:text-center tracking-normal">
          {title}
        </h3>
        <a href={link} target="_blank" className="hover:text-orange-400">
          <Icon.ArrowSquareOut size={32} />
        </a>
      </div>
      <p>{description}</p>
    </div>
  </section>
);
