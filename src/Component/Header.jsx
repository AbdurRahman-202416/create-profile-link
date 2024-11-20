import React from "react";

const Header = () => {
  return (
    <div>
      <div className="w-[375px] mt-10 h-[78px] pl-6 pr-4 py-4 bg-white rounded-xl flex-col justify-center  items-center  inline-flex">
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
          <div className="grow shrink basis-0 px-[27px] py-[11px] rounded-lg border border-[#623bff] flex-col justify-center items-center gap-2 inline-flex">
            <button className="text-[#623bff]   active:scale-110 hover:rotate-4 active:border-yellow-600  text-base font-semibold font-['Instrument Sans'] leading-normal">
              Back to Editor
            </button>
          </div>
          <div className="grow shrink basis-0  bg-[#623bff] w-full rounded-lg flex-col justify-center items-center gap-2 inline-flex">
            <button className="text-white  active:scale-110 hover:rotate-4 h-[50px] w-[100%] rounded-md bg-[#633CFF] active:border-cyan-600 text-base font-semibold font-['Instrument Sans'] leading-normal">
              Share Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
