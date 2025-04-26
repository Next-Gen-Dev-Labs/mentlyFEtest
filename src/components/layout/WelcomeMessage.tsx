"use client"

const WelcomeMessage = () => {
  return (
    <section className="bg-[#6F01D0] rounded-sm my-2 px-4 md:px-7 py-3">
        <main className="flex flex-col lg:flex-row gap-3 md:gap-0 md:justify-between mx-auto items-center">
            <h1 className="text-white text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold">Welcome Aboard, Blessing 👋</h1>
            <p className="text-[#BDBDBD] text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-center">We're thrilled to have you join Techrity Team!</p>
            <button className="w-full cursor-pointer transition-all duration-300 hover:bg-[#e5e0fd] lg:w-auto mt-2 lg:mt-0 text-sm md:text-base bg-white text-[#1F0954] font-bold px-6 rounded-lg py-2.5">Update Profile</button>
        </main>
    </section>
  )
}

export default WelcomeMessage
