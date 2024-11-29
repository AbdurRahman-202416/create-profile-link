import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import httpRequest from "../Axios";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { notify, notifyError } from "../Component/Toaster";
const ShareProfile = (props) => {
  const [profileDetails, setProfileDetails] = useState();
  const { username } = useParams()
  const getProfileDetails = async () => {
    try {
      const responce = await httpRequest.get(
        `/auth/public-profile?userName=${username}`
      );
      const data = responce.data;
      setProfileDetails(data)
      console.log(data);
      if (responce.status == 404) {
        notifyError("User profile is not published,  Request failed with status code 404, try again later");
      }
    } catch (error) {
      console.log(error);

    }
  };
  useEffect(() => {
    getProfileDetails();
    console.log(profileDetails)
  }, [])



  return (
    <div>
      {!profileDetails ? (
        <div className={`fade-loader show`}>
          <ClipLoader color="green" size={50} />
        </div>
      ) : <div className="w-[400px] sm:w-[450px] h-[90%] px-4  bg-white flex-col lg:mx-[35%] md:mx-[35%]   justify-center items-center  inline-flex">




        <div className="self-stretch   h-[80%] rounded-lg shadow-lg  flex-col justify-start items-start gap-14 inline-flex">
          <div className="self-stretch h-[209px]  flex-col justify-start items-center gap-[20px] flex">
            <img
              className="w-[150px] h-[150px] rounded-full shadow-xl shadow-blue-400  border-4 border-[#9179f1]"
              src={profileDetails.profile_picture_url}
            />
            <div className="flex-col justify-start items-center gap-2 flex">
              <div className="text-[#333333] text-[32px] font-bold  leading-[48px]">
                {profileDetails.first_name + " " + profileDetails.last_name}
              </div>
              <div className="text-[#727272] text-base font-normal  leading-normal">
                {profileDetails.email}
              </div>
            </div>
          </div>

          <div className="self-stretch h-[664px] mx-10 flex-col justify-start items-start gap-1 flex">
            {profileDetails.links.map((SingleLink, index) => {
              return (
                <a
                  href={SingleLink.url}
                  className={`self-stretch color-youtube p-2 hover:scale-105 hover:rotate-4 bg-[#191919] color-${SingleLink.platform} rounded-lg justify-start items-center gap-2 inline-flex`}
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
export default ShareProfile;
