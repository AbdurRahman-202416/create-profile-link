import React from "react";
import Navbar from "../Component/Navbar";
import NullLink from "../Component/NullLink";
import LinkForm from "../Component/LinkForm";


const UserDashBoard = () => {
  return (
    <div className="w-full ">
      <Navbar />

      <div className="h-[627px] px-6 p-5 flex-col mx-[10%] w-[100%] justify-start items-start gap-10 inline-flex">
        <div className="self-stretch h-auto flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-[#333333] w-[100%] text-2xl font-bold font-['Instrument Sans'] leading-9">
            Customize your links
          </div>
          <div className="self-stretch w-[80%] text-[#727272] text-base font-normal font-['Instrument Sans'] leading-normal">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </div>
        </div>
        <div className="self-stretch  w-[100%]  shrink basis-0 h-auto flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch  w-[90%] text-[#623bff]   active:border-gray-600   font-semibold font-['Instrument Sans'] h-auto  rounded-lg border border-[#623bff] flex-col justify-center items-center  ">
            <button className="self-stretch w-[100%] text-1xl font-bold h-[43px] p-2 active:bg-gray-300 rounded-md">
              + Add new link
            </button>
          </div>
        </div>
        <div className="w-[80%]">
          <NullLink />

          <LinkForm />
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
