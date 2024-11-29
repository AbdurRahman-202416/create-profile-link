import React, { useEffect } from "react";
import Navbar from "../Component/Navbar";
import NullLink from "../Component/NullLink";
import LinkForm from "../Component/LinkForm";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import httpRequest from "../Axios";
import { ClipLoader } from "react-spinners";
import { notifyError, notifySuccess } from "../Component/Toaster";
import NavbarPC from "../Component/NavbarPC";


const UserDashBoard = () => {

  const [AllLink, setAllLink] = useState([]);
  const [profile, setProfile] = useState([]);
  const [loader, setLoader] = useState(false);
  const ArrayLength = AllLink.length;
  const Navigate = useNavigate();

  const UpdateLink = async () => {
    AllLink.map((singleLink, index) => {
      console.log(singleLink, index)
      const newObj = {
        platform: singleLink.platform,
        url: singleLink.url,
        iconUrl: singleLink.iconUrl,
      }
      console.log(newObj)
      const patchData = async () => {
        try {
          const response = await httpRequest.patch(`/links/${singleLink.id}`, newObj);
          console.log(response)
        } catch (err) {
          console.log(err);
        }
      }
      patchData();
    })
  }

  const PostAllLink = async () => {

    await UpdateLink();
    setLoader(true)
    const linkList = AllLink.map((obj, indexOfObj) => {
      const newObj = {
        ...obj,

        iconUrl:
          "https://icons.veryicon.com/png/o/miscellaneous/logo-design-of-lingzhuyun/icon-correct-24-1.png",
      };
      delete newObj.id;
      return newObj;
      console.log(newObj);
    });
    let newData = linkList.filter((item, idex) => {
      return item.type == "client"
    })

    try {
      const response = await httpRequest.post("/links/bulk", newData);
      if (response.status == 201) {
        notifySuccess(" Links Added Successfully");
        Navigate("/profile");
      }
      console.log(response.data);
    } catch (err) {
      notifyError(err.response.data.message)
      console.log(err);
    } finally {
      setLoader(false);

    }

  };




  useEffect(() => {
    const fetchAllLink = async () => {
      setLoader(true)
      try {
        const response = await httpRequest.get("/links");
        if (response.status == 200) {
          setAllLink(response.data);
          console.log(response.data);
          setLoader(false)
        }
      }
      catch (err) {
        console.log(err);

      } finally {
        setLoader(false)
      }
    }
    fetchAllLink();
  }, []);

  const getProfile = async () => {
    try {
      const response = await httpRequest.get("auth/profile");
      if (response.status == 200) {
        setProfile(response.data);
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {
    getProfile();
  }, [])

  return (

    <div className="w-[100%] mt-2">
      {loader && (
        <div className={`fade-loader ${loader ? "show" : ""}`}>
          <ClipLoader color="green" size={25} />
        </div>
      )}
      <div className=" sm:mx-[15%]  block sm:hidden md:hidden lg:hidden py-8">
        <Navbar />
      </div>
      <div className="hidden sm:block md:block lg:block" >
        <NavbarPC />

      </div>
      <div className=" flex justify-center lg:mx-[20%] sm:mx-[10%] md:mx-[15%]    ">

        <div className="w-[400px] hidden mt-10 sm:block md:block lg:block h-[700px] m-2 flex ">

          <div className=" rounded-lg  ForBgImage flex flex-col h-[800px]  sm:w-[400px] md:w-[400px] lg:w[90%]  ">
            {/* Header */}
            <h1 className="h-8 w-full"></h1>

            {/* Main Content */}
            <div className="bg-gray-50  mx-[25px] rounded-lg mt-3  sm:w-[65%] lg:w-[65%] h-[70%] flex flex-col items-center">
              {/* Profile Section */}
              <div className="h-[177px] flex flex-col justify-center items-center gap-6 mt-6">
                <img
                  className="w-24 h-24 rounded-full border-4 border-[#623bff]"
                  src={profile.profile_picture_url}
                  alt="Profile"
                />
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className="text-[#333333] text-lg font-semibold  leading-[27px]">
                    {profile.first_name + " " + profile.last_name}
                  </div>
                  <div className="text-[#727272] text-sm font-normal  leading-[21px]">
                    {profile.email}
                  </div>
                </div>
              </div>


              <div className="flex flex-col w-[100%] justify-center items-center gap-2 mt-8">
                {
                  AllLink.map((item, index) => {
                    return (
                      <div key={index} className={`self-stretch h-11   bg-[#191919] color-${item.platform} rounded-lg flex items-center gap-2`}>
                        <div className="text-white text-xs font-normal sm:text-lg  justify-between flex  ">
                          <img src={item.iconUrl} className="w-10 p-2 h-10" alt="" />
                          {item.platform}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>


        <div className="h-auto flex-col mx-[10%] sm:mx-[2%] w-[100%]  sm:w-[60%] mt-2 md:w-[50%] lg:w-[70%] mr-10  justify-center sm:justify-between items-start  inline-flex">
          <div className="self-stretch  h-auto flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-[#333333] w-[100%] text-2xl font-bold  leading-9">
              Customize your links
            </div>
            <div className="self-stretch w-[90%]  text-[#727272] text-base font-normal leading-normal">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </div>
          </div>
          <div className="self-stretch  w-[100%]  shrink basis-0 h-auto flex-col justify-start items-start flex">
            <div className="self-stretch  w-[95%] text-[#623bff]   active:border-gray-600   font-semibold  h-auto  rounded-lg border border-[#623bff] flex-col justify-center items-center  ">
              <button
                onClick={() =>
                  setAllLink((prev) => {
                    console.log(prev);
                    let newArray = [...prev];
                    newArray.push({
                      id: Math.random() * 100,
                      // url:"www.google.com"
                      type: "client",
                    });
                    return newArray;
                  })
                }
                className="self-stretch w-[100%] text-1xl font-bold h-[43px] hover:bg-indigo-600 hover:text-white active:bg-gray-400 rounded-md"
              >
                + Add new link
              </button>
            </div>
          </div>
          <div className="w-[100%]">
            {AllLink.length === 0 ? (
              <NullLink />
            ) : (
              AllLink.map((item, index) => {
                return (
                  <LinkForm
                    key={item.id}
                    item={item}
                    linkCount={AllLink}
                    setLinkCount={setAllLink}
                    index={index}
                  />
                );
              })
            )}

            {ArrayLength !== 0 ? (
              <div className="h-[46px]  mt-6  w-full rounded-lg flex-col justify-center items-center  inline-flex">
                <button
                  onClick={PostAllLink}
                  className="w-full sm:w-[95%] text-xl text-white bg-blue-600 hover:bg-indigo-700 shadow-md  focus:outline-none active: font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 "
                >
                  Save
                </button>
              </div>
            ) : (
              <p className="text-gray-400  bg-indigo-100 font-bold items-center text-sm text-center rounded-lg  my-4 ">
                Please Click add New Link <br className=" block sm:hidden " />{" "}
                Button for add link
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
