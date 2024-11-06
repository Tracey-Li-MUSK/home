import React from "react";
import { Jumbotron } from "./migration";


const MeInRealLife = ({ heading, link, imgSize, message1, message2, message3, site }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic] = React.useState(Boolean(link));
  React.useEffect(() => {
    setProfilePicUrl(link);
  }, [link]);


  return (
    <Jumbotron
      id="life"
      className="m-0"
    >
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-left">
        {message1}
      </p>
      <p className="lead text-left">
        {message2}
      </p>
      <div className="container row">
        <div className="col-3 d-none d-lg-block mx-auto">
          {showPic && (
            <img
              className="border border-secondary rounded-circle"
              src={profilePicUrl}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <p className="lead text-left">{message3} <a className="text-decoration-none" href={site} target="_blank" rel="noreferrer">{"academic homepage"}</a>.</p>
        </div>
      </div>
    </Jumbotron>
  );
};

export default MeInRealLife;
