import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Button from "./Button";


const InfoCard = ({ title, description, buttonText ,path}) => {




  return (
    <div className=" relative flex flex-col justify-start  items-center text-center p-5 border  border-gray-200 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold mt-8 mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      {/* <button  
      
      className="bg-black text-white py-2 px-5 rounded-full hover:bg-gray-800 transition-colors" 
      
      >
        <Link to={path}>{buttonText}</Link>
        
        
      </button> */}

      <div className="absolute top-[60%] left-[40%]">
          <Button buttontext={"EXPLORE"} path={path}/>
      </div>
  
        

    </div>
  );
};


const InfoSection = ({ cards }) => {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-20 py-10">
      {cards.map((card, index) => (
        <InfoCard
          key={index}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          path={card.path}
        />
      ))}
    </div>
  );
};

export default InfoSection;
