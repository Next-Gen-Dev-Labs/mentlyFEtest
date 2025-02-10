export default function ProgramBanner() {
  return (
    <div className="w-full max-w-[625px] h-[206px] rounded-lg overflow-hidden relative bg-gradient-to-r from-gray-800 via-gray-800 to-gray-600 py-3 md:py-6 px-3 md:px-8 flex items-center justify-between">
      {/* Oval Background Shape */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[80%] h-full bg-gradient-to-r from-[#080C18] via-gray-900 to-transparent opacity-70 rounded-full absolute left-[40px]"></div>
      </div>

   
      <div className="flex items-center space-x-4 relative">
        {/* Mentor Image */}
        <img
          src="/images/mentor.png"
          alt="Mentor"
          className="h-full"
        />

       
        <div className="h-full">
          <h3 className="text-white font-extrabold text-[18px] md:text-[28.12px] leading-tight">
            Mastering the <br /> work life Equation
          </h3>
          <p className="text-white text-sm font-handwrite mt-2 gap-2">with <span className="font-sans"> Nwachukwu Peculiar</span></p>

          {/* Badge */}
          <div className="mt-2">
            <span className="bg-gradient-to-r from-red-500 to-orange-400   text-white text-xs px-[35px] py-1 text-center rounded-md">
              Masterclass
            </span>
          </div>
        </div>
      </div>

      {/* Right Section: Date and Time */}
      <div className="text-white text-right relative font-semibold">
        <p className="text-md">20TH <br /> OCT, 2024</p>
        <div className="w-100 h-[1px] bg-white my-2"></div>
        <p className="text-md mt-2">2PM</p>
      </div>
    </div>
  );
}
