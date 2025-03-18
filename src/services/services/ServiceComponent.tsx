// import myImages from '';
// import { MoveRight } from "lucide-react";
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ServiceComponent = ({ service }) => {
//   const [size, setSize] = useState(70);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setSize(20);
//       } else {
//         setSize(40);
//       }
//     };
//     handleResize(); // Call initially
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleArrowClick = () => {
//     navigate('/ServiceDetailsPage', { state: { service } });
//   };

//   return (
//     <div className="mb-8 flex justify-center align-middle">
//       <div className="pl-5 border flex flex-col  rounded-xl text-black mt-10 ml-8 bg-cover bg-no-repeat h-[270px] lg:h-[100%] w-[360px] lg:w-[80%]" style={{ backgroundImage: `url(${myImages})` }}>
//         <div className="mt-6 lg:mt-10 h-8 text-black text-[18px] lg:text-2xl font-semibold whitespace-pre">
//           {service.title}
//         </div>
//         <div>
//           <p className=" text-[12px] lg:text-base  w-[270px] lg:w-[300px] leading-9 text-[#9197a3] font-normal lg:mt-2">
//             {service.discription}
//           </p>
//         </div>
//         <div className="flex gap-x-4 lg:mt-8 mt-4">
//           <div
//             className="size-[3.5rem] lg:size-[4rem] bg-[#034B63] rounded-full flex justify-center items-center hover:-rotate-[30deg] transition-all ease-in-out duration-300 cursor-pointer hover:scale-110 hover:shadow-lg"
//             onClick={handleArrowClick}
//           >
//             <MoveRight
//               stroke="white"
//               size={size}
//               strokeWidth={1.3}
//             />
//           </div>
//           <div className="text-gray-600 whitespace-pre flex items-center text-[10px] lg:text-xl">
//             <a href="/service-details">
//               Read more
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceComponent;
