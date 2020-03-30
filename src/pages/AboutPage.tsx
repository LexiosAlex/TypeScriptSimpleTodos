import React from "react";
import { useHistory } from "react-router-dom";

const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ipsum natus
        ullam? Aut explicabo impedit, quas qui quis vero voluptatibus.
      </p>
      <button className="btn" onClick={() => history.push('/')}>Back to Todos</button>
    </>
  );
};

export default AboutPage;
