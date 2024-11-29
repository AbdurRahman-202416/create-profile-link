import React from 'react'

const SideBar = () => {
  return (
    <div>
          <div className="w-2/4 hidden mx-[5%] sm:block md:block lg:block h-[700px] flex justify-center items-center">
          <div className="bg-white rounded-lg ForBgImage flex flex-col h-[800px] w-[90%]">
            {/* Header */}
            <h1 className="h-8 w-full"></h1>

            {/* Main Content */}
            <div className="bg-gray-200  mx-[28px] rounded-lg mt-3 w-[75%] h-[70%] flex flex-col items-center">
              {/* Profile Section */}
              <div className="h-[177px] flex flex-col justify-center items-center gap-6 mt-6">
                <img
                  className="w-24 h-24 rounded-full border-4 border-[#623bff]"
                  src="https://via.placeholder.com/96x96"
                  alt="Profile"
                />
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className="text-[#333333] text-lg font-semibold font-['Instrument Sans'] leading-[27px]">
                    Ben Wright
                  </div>
                  <div className="text-[#727272] text-sm font-normal font-['Instrument Sans'] leading-[21px]">
                    ben@example.com
                  </div>
                </div>
              </div>


              <div className="flex flex-col w-[90%] justify-start items-center gap-2  mt-8">
                {/* GitHub */}
                <div className="self-stretch h-11 px-4 py-[11px] bg-[#191919] rounded-lg flex items-center gap-2">
                  <div className="text-white text-xs font-normal font-['Instrument Sans'] leading-[18px]">
                    GitHub
                  </div>
                </div>
                {/* YouTube */}
                <div className="self-stretch h-11 px-4 py-[11px] bg-[#ee3838] rounded-lg flex items-center gap-2">
                  <div className="text-white text-xs font-normal font-['Instrument Sans'] leading-[18px]">
                    YouTube
                  </div>
                </div>
                {/* LinkedIn */}
                <div className="self-stretch h-11 px-4 py-[11px] bg-[#2d68ff] rounded-lg flex items-center gap-2">
                  <div className="text-white text-xs font-normal font-['Instrument Sans'] leading-[18px]">
                    LinkedIn
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default SideBar
