import TestimonialBox from "./TestimonialBox";

function testimonials() {
  const testimonialsData = [
    {
      desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: "profile-1.jpg",
      position: "Founder & CEO Huddle",
      name: "Mohammed",
    },
    {
      desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: "profile-2.jpg",
      position: "Founder & CEO Huddle",
      name: "Eman",
    },
    {
      desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: "profile-3.jpg",
      position: "Founder & CEO Huddle",
      name: "Ahmad",
    },
  ];
  return (
    <section className="pb-[150px]">
      <div className="container px-4 text-center relative">
        <div className="absolute z-[0] left-[0] top-[-30px]">
          <img src="./assets/images/bg-quotes.png" alt="quote-img " />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialBox key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default testimonials;
