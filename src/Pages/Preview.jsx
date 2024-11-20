import React from "react";
import Header from "../Component/Header";

const Preview = () => {
  return (
    <div>
      <div className="w-[375px] h-auto   bg-white flex-col lg:mx-[35%] md:mx-[35%]   justify-center items-center  inline-flex">
        <div className="m-2">
          <Header />
        </div>

        {/* <div className="self-stretch h-[78px] pl-6 pr-4 py-4 bg-white rounded-xl flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 px-[27px] py-[11px] rounded-lg border border-[#623bff] flex-col justify-center items-center gap-2 inline-flex">
              <div className="text-[#623bff] text-base font-semibold font-['Instrument Sans'] leading-normal">
                Back to Editor
              </div>
            </div>
            <div className="grow shrink basis-0 px-[27px] py-[11px] bg-[#623bff] rounded-lg flex-col justify-center items-center gap-2 inline-flex">
              <div className="text-white text-base font-semibold font-['Instrument Sans'] leading-normal">
                Share Link
              </div>
            </div>
          </div>
        </div> */}
        <div className="self-stretch h-auto  flex-col justify-start items-start gap-14 inline-flex">
          <div className="self-stretch h-[209px]  flex-col justify-start items-center gap-[25px] flex">
            <img
              className="w-[150px] h-[150px] rounded-full shadow-xl shadow-blue-500/100  border-4 border-[#623bff]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUqSojztqZnRXSFvvlm_sX78WOWk7w4ZNxQ&s"
            />
            <div className="flex-col justify-start items-center gap-2 flex">
              <div className="text-[#333333] text-[32px] font-bold font-['Instrument Sans'] leading-[48px]">
                Ben Wright
              </div>
              <div className="text-[#727272] text-base font-normal font-['Instrument Sans'] leading-normal">
                ben@example.com
              </div>
            </div>
          </div>
          <div className="self-stretch h-[664px] flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch p-4 hover:scale-105 hover:rotate-4 bg-[#191919] rounded-lg justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0   text-white text-base font-normal font-['Instrument Sans'] leading-normal">
                GitHub
              </div>
            </div>
            <div className="self-stretch p-4  hover:scale-105 hover:rotate-4  bg-[#ee3838] rounded-lg justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-white text-base font-normal font-['Instrument Sans'] leading-normal">
                YouTube
              </div>
            </div>
            <div className="self-stretch p-4 hover:scale-105 hover:rotate-4  bg-[#2d68ff] rounded-lg justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-white text-base font-normal font-['Instrument Sans'] leading-normal">
                LinkedIn
              </div>
            </div>
            <div className="self-stretch p-4 hover:scale-105 hover:rotate-4  bg-[#333333] rounded-lg justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-white text-base font-normal font-['Instrument Sans'] leading-normal">
                Dev.to
              </div>
            </div>
            <div className="self-stretch p-4 hover:scale-105 hover:rotate-4  bg-[#8a1a50] rounded-lg justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-white text-base font-normal font-['Instrument Sans'] leading-normal">
                Codewars
              </div>
              <div className="w-4 h-4 relative" />
            </div>
            <div className="self-stretch p-4 hover:scale-105 hover:rotate-4  bg-[#2f2167] rounded-lg justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-white text-base font-normal font-['Instrument Sans'] leading-normal">
                freeCodeCamp
              </div>
              <div className="w-4 h-4 relative" />
            </div>
            <div className="self-stretch p-4 hover:scale-105 hover:rotate-4  bg-[#ea4825] rounded-lg justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-white text-base font-normal font-['Instrument Sans'] leading-normal">
                GitLab
              </div>
              <div className="w-4 h-4 relative" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
