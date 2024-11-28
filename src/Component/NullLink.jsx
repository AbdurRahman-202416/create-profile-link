import React from "react";

const NullLink = () => {
  return (
    <div>
      <div className="self-stretch h-[100vh ] sm:h-auto grow w-[100%] shrink basis-0 py-6  rounded-xl bg-gray-100  h-full flex-col justify-center items-center gap-3 flex">
        <div className="self-stretch h-[284px] flex-col justify-start items-center gap-6 flex">
          <div className="w-[150px] h-20 relative">
            <img
              className="hover:scale-110 transition-transform h-[100px] w-full duration-300"
              src="src\assets\images\Group 273.png"
              alt=""
            />
          </div>
          <div className="self-stretch text-center text-[#333333] text-2xl font-bold font-['Instrument Sans'] leading-9">
            Let’s get you started
          </div>
          <div className="self-stretch px-4 text-[#727272] text-base font-normal text-justify lg: font-['Instrument Sans'] leading-normal">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </div>
        </div>
      </div>
    </div>
  );
};

export default NullLink;
