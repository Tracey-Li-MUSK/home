import React from "react";
import { Jumbotron } from "./migration";

const ImageWithCaption = ({ src, description }) => {
  return (
    <div className="text-center mb-4">
      <img src={src} alt= "" className="img-fluid" />
      <div className="mt-2">
        <p className="text-centen">{description}</p>
      </div>
    </div>
  );
};

const WorkingExperience = ({ heading, message1, image1, image2, image3, image4, image5,  message2, message3, message4, message5, message6, message7, message8, message9 }) => {
  return (
    <Jumbotron
      id="work"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <div className="row justify-content-center"><p className="lead text-left col-10">{message1}</p></div>
      <ImageWithCaption
        src={image1.src}
        description={image1.description}
      />
      <p className="display-6 pb-3 text-center">{"Neurology"}</p>
      <div className="row justify-content-center"><p className="lead text-left col-10">{message2}</p></div>
      <div className="row justify-content-center"><p className="lead text-left col-10">{message3}</p></div>
      <div className="row justify-content-center"><p className="lead text-left col-10">{message4}</p></div>
      <ImageWithCaption
        src={image2.src}
        description={image2.description}
      />
      <ImageWithCaption
        src={image3.src}
        description={image3.description}
      />
      <p className="display-6 pb-3 text-center">{"Neurosurgery"}</p>
      <div className="row justify-content-center"><p className="lead text-left col-10">{message5}</p></div>
      <div className="row justify-content-center"><p className="lead text-left col-10">{message6}</p></div>
      <ImageWithCaption
        src={image4.src}
        description={image4.description}
      />
      <p className="display-6 pb-3 text-center">{"Medical Genetics Department"}</p>
      <div className="row justify-content-center"><p className="lead text-left col-10">{message7}</p></div>
      <div className="row justify-content-center"><p className="lead text-left col-10">{message8}</p></div>
      <div className="row justify-content-center"><p className="lead text-left col-10">{"Here are some popular science articles on the official account during my rotation:"}</p></div>
      <div className="row justify-content-center">
        <p className="lead text-left col-10">
          <ul>
              <li><a href="https://mp.weixin.qq.com/s/lNhIrVC7T37ZSOgqwhyljQ">Rare diseases are never rare, we wanna say...</a></li>
              <li><a href="https://mp.weixin.qq.com/s/o2Ch3TxXmcjV2VvgYr4sDA">A misdiagnosis case: Ten years of lumbar spine disease landed me in the ICU</a></li>
              <li><a href="https://mp.weixin.qq.com/s/QqRnZz-YjxxdBAS2sSxEEQ">Multi-organ failure in a 19-year-old after eating snakes: Muscle biopsy has a say!</a></li>
          </ul>
        </p>
      </div>
      
      <ImageWithCaption
        src={image5.src}
        description={image5.description}
      />
      <p className="display-6 pb-3 text-center">{"Emergency Room"}</p>
      <div className="row justify-content-center"><p className="lead text-left col-10">{message9}</p></div>
    </Jumbotron>
  );
};

export default WorkingExperience;
