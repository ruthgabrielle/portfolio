import "./index.css";
import Me from "../../assets/img/about-1.jpeg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          “The more I study, the more insatiable do I feel my genius for it to
          be.” - Ada Lovelace
        </p>
        <p className="a-desc">
          I'm an experienced software engineer who constantly seeks out
          innovative solutions to everyday problems, my main background is
          Front-End but I've already worked with multiples projects in different
          stacks. In my years in this industry, I've honed my analytical
          thinking and collaboration skills, and I love working with a team.
        </p>
      </div>
    </div>
  );
};

export default About;
