import info from "./../info.json";

export const HeroSection = () => {
  const { basics } = info;
 
  return (
    <div className="hero">
      <div className="hero-title-wrapper">
        <div className="hero-title">
          <h1 >{basics.label}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
