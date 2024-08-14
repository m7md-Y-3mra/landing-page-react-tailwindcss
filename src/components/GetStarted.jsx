function GetStarted() {
  return (
    <section className="pb-16 relative">
      <div className="container">
        <div className="w-[856px] max-w-full absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] mx-auto bg-secondaryColor text-white text-center p-7 rounded-[6px] shadow-lg">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Get early access today
          </h3>
          <p className="mb-8">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form className="flex flex-col md:flex-row justify-center items-center gap-2 ">
            <input
              type="email"
              className="w-full md:w-3/4 pl-5 p-3 rounded-[30px] focus:outline-none text-black"
              placeholder="email@example.com"
            />
            <button type="submit" className="btn w-full md:w-fit px-5 py-3">
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
