function Landing() {
  return (
    <section className="bg-secondaryColor pt-[200px]">
      <div className="container mx-auto center-flex flex-col gap-8">
        <img
          src="./assets/images/illustration-intro.png"
          alt="landing-img"
          className="w-full max-w-[750px] h-auto"
        />
        <div className="text-white text-center">
          <h1 className="text-[28px] lg:w-[80%] mx-auto md:text-[40px] font-semibold mb-4">
            All your files in one secure location, accessible anywhere
          </h1>
          <p className="text-lg md:w-3/5 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            dolor libero eligendi ullam reiciendis
          </p>
        </div>
        <a href="/" className="btn w-[280px] h-[60px]">
          Get Started
        </a>
      </div>
      <img
        src="./assets/images/bg-curvy-desktop.svg"
        alt="curvy-img"
        className="w-full h-[200px]"
      />
    </section>
  );
}

export default Landing;
