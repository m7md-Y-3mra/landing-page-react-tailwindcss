import FeatureBox from "./FeatureBox";

function Features() {
  const features = [
    {
      icon: "icon-access-anywhere.svg",
      title: "Acess your files, anywhere",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, labo",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, labo",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, labo",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, labo",
    },
  ];
  return (
    <section className="pb-16">
      <div className="container">
        <div className=" grid md:grid-cols-2 gap-[50px] md:gap-[100px] max-w-[865px] mx-auto">
          {features.map((feature, index) => (
            <FeatureBox key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
