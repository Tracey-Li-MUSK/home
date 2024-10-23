import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences,
  meInRealLife,
  workingExperience,
  researchProjects
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";
import Experience from "./components/home/Experience";
import MeInRealLife from "./components/home/MeInRealLife";
import WorkingExperience from "./components/home/WorkingExperience.jsx";
import ResearchProjects from "./components/home/ResearchProjects.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        c_message={mainBody.c_message}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {
        experiences.show && (
          <Experience experiences={experiences}/>
        )
      }
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {workingExperience.show && (
        <WorkingExperience
          heading={workingExperience.heading}
          message1={workingExperience.message1}
          message2={workingExperience.message2}
          message3={workingExperience.message3}
          message4={workingExperience.message4}
          message5={workingExperience.message5}
          message6={workingExperience.message6}
          message7={workingExperience.message7}
          message8={workingExperience.message8}
          message9={workingExperience.message9}
          image1={workingExperience.image1}
          image2={workingExperience.image2}
          image3={workingExperience.image3}
          image4={workingExperience.image4}
          image5={workingExperience.image5}
        />
      )}
      {researchProjects.show && (
        <ResearchProjects
          heading={researchProjects.heading}
        />
      )}
      {meInRealLife.show && (
        <MeInRealLife
          heading={meInRealLife.heading}
          link={meInRealLife.imageLink}
          imgSize={meInRealLife.imageSize}
          message1={meInRealLife.message1}
          message2={meInRealLife.message2}
          message3={meInRealLife.message3}
          site={meInRealLife.site}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
