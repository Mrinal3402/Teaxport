// import React, { useState } from 'react';

// const FamilyList = ({ members }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleDetails = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//         <>
//         <div className='ml-16 '>
//             <h2 className="text-4xl font-semibold mt-10 mb-14 text-start">The Family</h2>
//         </div>
//         <div className="p-4 max-w-6xl  mx-auto">
      
//           <div className="  space-y-6">
//             {members.map((member, index) => (
//           <div
//             key={index}
//             className="border  rounded-lg overflow-hidden shadow-sm"
//           >
//             <div
//               className="flex items-center justify-between p-12   cursor-pointer"
//               onClick={() => toggleDetails(index)}
//             >
//               <span className="font-normal  text-lg">{member.name}</span>
//               <button className="text-4xl font-normal text-black">
//                 {openIndex === index ? '-' : '+'}
//               </button>
//             </div>
//             {openIndex === index && (
//               <div className="p-4  ">
//                 <p className="text-sm transition-all text-gray-700 ">{member.details}</p>
//                 {member.image && (
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-24 h-24 rounded-none  mt-4"
//                   />
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//           </div>
//         </div>
//         </>
//   );
// };

// export default FamilyList;




// import React, { useState } from "react";

// const FamilyList = ({ title, description, image }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="border border-gray-300 rounded-lg overflow-hidden mb-4">
//       <div
//         className={`bg-blue-500 text-black px-4 py-3 font-custom cursor-pointer flex items-center ${
//           isOpen ? "text-4xl font-semibold  duration-500 ease" : "text-xl  transition-all duration-500 ease"
//         }`}
//         onClick={toggleAccordion}
//       >
//         {title}
//       </div>
//       <div
//         className={`transition-all duration-500 ease-in-out overflow-hidden ${
//           isOpen ? "max-h-screen p-4" : "max-h-0 p-0"
//         }`}
//       >
//         <p className="mb-4">{description}</p>
//         <img
//           src=""
//           alt={image}
//           className="w-full max-w-[300px] rounded-lg shadow"
//         />
//       </div>
//     </div>
//   );
// };

// export default FamilyList;




import React, { useState } from "react";

const FamilyList = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" ">
      {data.map((item, index) => (
        <div
          key={index}
          className="border-t-2  border-gray-300 py-16  overflow-hidden"
            
        >
          <div
            className=" relative  w-screen px-4  font-custom cursor-pointer gap-10 flex  items-center"
            onClick={() => toggleAccordion(index)}
          >
            
             <img
              src={item.image}
              alt={item.title}
              className={` image mt-4 absolute h-[15vh] rounded-lg shadow ${openIndex === index
                ? "mt-28 h-[20vh] duration-500 ease-in-out"
                : " transition-all duration-500 ease-in-out "}`}
            />
              <h2 className={`text-black font-custom ml-[9%] ${
                openIndex === index
                  ? "text-3xl  font-medium uppercase transition-all duration-300 ease-linear"
                  : "text-xl transition-all uppercase duration-300 ease-in-out "
              }`}>{item.title}</h2>
              <button className={`text-5xl font-light left-[72%] absolute ${
              
               openIndex === index
                  ? "text-5xl   transition-all duration-500 ease-in-out"
                  : "text-5xl transition-all duration-500 ease-in-out "
              } `}>
              {openIndex === index ? '-' : '+'}
                  </button>
          </div>
          <div
            className={` transition-all duration-500 sticky top-[-5%] ease-in-out flex ml-[13%]  overflow-hidden ${
              openIndex === index ? "max-h-screen p-4" : "max-h-0 p-0"
            }`}
          >
            <p className="  ml-[-1.5%]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FamilyList;
