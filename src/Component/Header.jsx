import React from "react";
import { Link, Navigate } from "react-router-dom";
import httpRequest from "../Axios";
// import CopyToClipboard from "react-copy-to-clipboard";
import { notifyError, notifySuccess } from "./Toaster";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
const Header = ({ isPublished, getProfileInfo }) => {
  console.log(isPublished)
  const Navigate = useNavigate()
  const [loader, setLoader] = React.useState(false)

  const copyLink = async () => {
    setLoader(true)
    const data = {
      isPublished: true,
    };
    try {
      const responce = await httpRequest.patch("auth/profile/update", data);
      console.log(responce);
      const username = responce.data.username;
      const link = window.location.origin;
      let finalLink = `${link}/share/${username}`;
      navigator.clipboard?.writeText(finalLink);
      getProfileInfo();
      notifySuccess("Link Copied");
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false)
    }
  };

  const JustFun = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false)
      Navigate("/dashboard");
    }, 500);
  }
  const UnpublishInfo = async () => {
    setLoader(true)
    const data = {
      isPublished: false,
    };
    try {
      const responce = await httpRequest.patch("auth/profile/update", data);
      console.log(responce);
      getProfileInfo();

    }
    catch (err) {
      console.log(err)
    } finally {
      setLoader(false)
    }
  }




  return (

    <div>
      {loader && (
        <div className={`fade-loader ${loader ? "show" : ""}`}>
          <ClipLoader color="green" size={80} />
        </div>
      )}
      <div className="w-[375px] mt-10 h-[78px] pl-6 pr-4 py-4 bg-white rounded-xl flex-col justify-center  items-center  inline-flex">
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 px-[27px] py-[11px] rounded-lg border border-[#623bff] flex-col justify-center items-center gap-2 inline-flex">

            <button onClick={JustFun} className="text-[#623bff]   active:scale-110 hover:rotate-4 active:border-yellow-600  text-base font-semibold font-['Instrument Sans'] leading-normal">
              Back to Editor
            </button>

          </div>
          {
            isPublished === false ? (
              <div className="grow shrink basis-0 bg-[#623bff] w-full rounded-lg flex-col justify-center items-center gap-2 inline-flex">
                <button
                  onClick={copyLink}
                  className="text-white active:scale-110 hover:rotate-4 h-[50px] w-[100%] rounded-md bg-[#633CFF] active:border-cyan-600 text-base font-semibold font-['Instrument Sans'] leading-normal"
                >
                  Publish
                </button>
              </div>
            ) : (
              <div className="grow shrink basis-0 bg-[#623bff] w-full rounded-lg flex-col justify-center items-center gap-2 inline-flex">

                <button
                  onClick={UnpublishInfo}
                  className="text-white active:scale-110 hover:rotate-4 h-[50px] w-[100%] rounded-md bg-[#633CFF] active:border-cyan-600 text-base font-semibold font-['Instrument Sans'] leading-normal"
                >
                  Unpublish
                </button>
              </div>
            )
          }




        </div>
      </div>
    </div >

  );
};

export default Header;
