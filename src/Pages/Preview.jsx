import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import httpRequest from "../Axios";
import { data } from "autoprefixer";
import { ClipLoader } from "react-spinners";

const Preview = () => {
  const [Data, setData] = useState();
  const [loader, setLoader] = useState(false);

  const getProfileInfo = async () => {
    setLoader(true)
    try {
      const response = await httpRequest.get("auth/profile");
      const data = await response.data;
      console.log(data);
      if (response.status == 201) {
        setLoader(false)
      }
      setData(data)

    } catch (err) {
      console.log("Error fetching links:", err);
    } finally {
      setLoader(false)
    }
  };

  // GetAllLink();
  useEffect(() => {
    getProfileInfo()
  }, []);

const isPublished= Data?.isPublished;

  return (
    <div>
      {!Data ? (
        <div className={`fade-loader show`}>
          <ClipLoader color="green" size={50} />
        </div>
      ) : <div className="w-[400px] sm:w-[450px] h-[90%] px-4  bg-white flex-col lg:mx-[35%] md:mx-[35%]   justify-center items-center  inline-flex">
        <div className="m-2">
          <Header isPublished={isPublished}  getProfileInfo={getProfileInfo} />
        </div>

   

        <div className="self-stretch  h-[80%] rounded-lg shadow-lg  flex-col justify-start items-start gap-14 inline-flex">
          <div className="self-stretch h-[209px]  flex-col justify-start items-center gap-[20px] flex">
            <img
              className="w-[150px] h-[150px] rounded-full shadow-xl shadow-blue-400  border-4 border-[#9179f1]"
              src={Data.profile_picture_url}
            />
            <div className="flex-col justify-start items-center gap-2 flex">
              <div className="text-[#333333] text-[32px] font-bold  leading-[48px]">
                {Data.first_name + " " + Data.last_name}
              </div>
              <div className="text-[#727272] text-base font-normal  leading-normal">
              {Data.email}
              </div>
            </div>
          </div>

          <div className="self-stretch h-[664px] mx-4 flex-col justify-start items-start gap-5 flex">
            {Data.links.map((SingleLink, index) => {
              return (
                <a
                  href={SingleLink.url}
                  className="self-stretch p-4 hover:scale-105 hover:rotate-4 bg-[#191919] rounded-lg justify-start items-center gap-2 inline-flex"
                > <img className="h-[30px] w-[30px]" src={SingleLink.iconUrl} alt="" />
                  <div className="grow shrink basis-0   text-white text-base font-normal leading-normal">
                    {SingleLink.platform}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>}

    </div>
  );
};

export default Preview;

// <div className="self-stretch h-[80%] rounded-lg shadow-lg  flex-col justify-start items-start gap-14 inline-flex">
//           <div className="self-stretch h-[209px]  flex-col justify-start items-center gap-[25px] flex">
//             <img
//               className="w-[150px] h-[150px] rounded-full shadow-xl shadow-blue-500/100  border-4 border-[#623bff]"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUqSojztqZnRXSFvvlm_sX78WOWk7w4ZNxQ&s"
//             />
//             <div className="flex-col justify-start items-center gap-2 flex">
//               <div className="text-[#333333] text-[32px] font-bold font-['Instrument Sans'] leading-[48px]">
//                 Ben Wright
//               </div>
//               <div className="text-[#727272] text-base font-normal font-['Instrument Sans'] leading-normal">
//                 ben@example.com
//               </div>
//             </div>
//           </div>
//           <div className="self-stretch h-[664px] flex-col justify-start items-start gap-5 flex">
//             <div className="self-stretch p-4 hover:scale-105 hover:rotate-4 bg-[#191919] rounded-lg justify-start items-center gap-2 inline-flex">
//               <div className="grow shrink basis-0   text-white text-base font-normal font-['Instrument Sans'] leading-normal">
//                 GitHub
//               </div>
//             </div>
//             <div className="self-stretch p-4  hover:scale-105 hover:rotate-4  bg-[#ee3838] rounded-lg justify-start items-center gap-2 inline-flex">
//               <div className="grow shrink basis-0 text-white text-base font-normal font-['Instrument Sans'] leading-normal">
//                 YouTube
//               </div>
//             </div>
//             <div className="self-stretch p-4 hover:scale-105 hover:rotate-4  bg-[#2d68ff] rounded-lg justify-start items-center gap-2 inline-flex">
//               <div className="grow shrink basis-0 text-white text-base font-normal font-['Instrument Sans'] leading-normal">
//                 LinkedIn
//               </div>
//             </div>
//             <div className="self-stretch p-4 hover:scale-105 hover:rotate-4  bg-[#333333] rounded-lg justify-start items-center gap-2 inline-flex">
//               <div className="grow shrink basis-0 text-white text-base font-normal font-['Instrument Sans'] leading-normal">
//                 Dev.to
//               </div>
//             </div>
//             <div className="self-stretch p-4 hover:scale-105 hover:rotate-4  bg-[#8a1a50] rounded-lg justify-start items-center gap-2 inline-flex">
//               <div className="grow shrink basis-0 text-white text-base font-normal font-['Instrument Sans'] leading-normal">
//                 Codewars
//               </div>
//               <div className="w-4 h-4 relative" />
//             </div>
//             <div className="self-stretch p-4 hover:scale-105 hover:rotate-4  bg-[#2f2167] rounded-lg justify-start items-center gap-2 inline-flex">
//               <div className="grow shrink basis-0 text-white text-base font-normal font-['Instrument Sans'] leading-normal">
//                 freeCodeCamp
//               </div>
//               <div className="w-4 h-4 relative" />
//             </div>
//             <div className="self-stretch p-4 hover:scale-105 hover:rotate-4  bg-[#ea4825] rounded-lg justify-start items-center gap-2 inline-flex">
//               <div className="grow shrink basis-0 text-white text-base font-normal font-['Instrument Sans'] leading-normal">
//                 GitLab
//               </div>
//               <div className="w-4 h-4 relative" />
//             </div>
//           </div>
//         </div>
