function FeatureBox({ icon, title, desc }) {
  return (
    <div className="text-white flex flex-col items-center text-center gap-[15px]">
      <img
        src={`./assets/images/${icon}`}
        alt="icon-img"
        className="w-[80px] h-[80px] object-contain"
      />
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-sm">{desc}</p>
    </div>
  );
}

export default FeatureBox;
