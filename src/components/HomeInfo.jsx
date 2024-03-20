import React from 'react';
import { Link } from 'react-router-dom';

import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="box-white box-btn">
      {btnText}
      <img src={arrow} />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center bubblegum-pink py-4 px-8 text-white mx-5">
      Hi! I am <span className="font-semibold">Nataliia</span> 👋
      <br />A Front-End Engineer
    </h1>
  ),
  2: (
    <InfoBox
      text="I have nearly three years of commercial experience, and my main stack includes Typescript, React, and Redux."
      link="/portfolio/about"
      btnText="Learn more"
    />
  ),
  3: <h1>3</h1>,
  4: <h1>4</h1>
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
