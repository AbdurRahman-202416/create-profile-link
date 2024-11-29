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
    getProfileInfo();
  }, []);

  const isPublished = Data?.isPublished;

  return (
    <div>
      {!Data ? (
        <div className={`fade-loader show`}>
          <ClipLoader color="green" size={50} />
        </div>
      ) : <div className="w-[400px] sm:w-[450px] h-[90%] px-4  bg-white flex-col lg:mx-[35%] md:mx-[35%]   justify-center items-center  inline-flex">
        <div className="m-2">
          <Header isPublished={isPublished} getProfileInfo={getProfileInfo} />
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

          <div className="self-stretch h-[664px] mx-4 flex-col justify-start items-start gap-2 flex">
            {Data.links.map((SingleLink, index) => {
              return (
                <a
                  href={SingleLink.url}
                  className={`self-stretch p-2 hover:scale-105 hover:rotate-4 font-bold bg-black color-${SingleLink.platform}  rounded-lg justify-start items-center gap-1 inline-flex`} >
                  <img className="h-[30px] w-[30px]" src={SingleLink.iconUrl} alt="icon" />
                  <div className={`grow shrink basis-0  text-white text-base font-normal leading-normal`}>
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

//