function StayProductive() {
  return (
    <section className="py-[150px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div>
          <img src={`./assets/images/illustration-stay-productive.png`} />
        </div>
        <div className="text-white">
          <h3 className="font-medium text-[35px] leading-[50px] sm:max-w-[90%]">
            Stay productive, wherever you are
          </h3>
          <div className="my-[15px] text-gray-400 text-sm font-normal tracking[0.8px] ">
            <p className="mb-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              reiciendis et! Nesciunt soluta quaerat esse ipsa est dolorum
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              reiciendis et! Nesciunt soluta quaerat esse ipsa est dolorum
            </p>
          </div>
          <a
            href="/"
            className="text-btnColor flex gap-[5px] items-center pb-[5px] w-fit border-b-2 border-btnColor hover:text-activeBtnColor transition-colors duration-200"
          >
            <span>See how Fylo works</span>
            <img
              src="/src/assets/images/icon-arrow.svg"
              alt="arrow-img"
              className="w-[20px] h-[20px] object-contain animate-moveRight"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default StayProductive;
