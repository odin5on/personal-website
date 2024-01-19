import laptop from "../assets/images/laptop.png";

const About: React.FC = () => {
  return (
    <div className="pb-20">
      <div>
        <img src={laptop} alt="Laptop" />
      </div>
      <div>
        I&apos;m going to write some things about myself based around the stickers on my laptop.
      </div>
    </div>
  );
};

export default About;
