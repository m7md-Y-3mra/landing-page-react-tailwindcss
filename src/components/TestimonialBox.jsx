function TestimonialBox({ name, image, desc, position }) {
  //   const { name, image, desc, position } = props;
  return (
    <div className="text-white bg-secondaryColor rounded-[5px] p-[30px] shadow-lg">
      <p className="text-sm text-left tracking-[0.8px]">{desc}</p>
      <div className="flex items-center mt-6">
        <img
          src={`./assets/images/${image}`}
          alt={image}
          className="w-12 h-12 rounded-full object-contain"
        />
        <div className="ml-4 text-left">
          <h5 className="font-bold text-white">{name}</h5>
          <p className="text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialBox;
