"use client"

const WelcomeMessage = () => {
  return (
    <section className="bg-[#6F01D0] rounded-sm mt-4 px-7 py-3 mx-4">
        <main className="flex justify-between mx-auto items-center">
            <h1 className="text-white xl:text-2xl lg:text-xl md:text-lg text-sm font-semibold">Welcome Aboard, Blessing 👋</h1>
            <p className="text-[#BDBDBD] xl:text-2xl lg:text-xl md:text-lg text-sm font-semibold">We’re thrilled to have you join Techrity Team!</p>
            <button className="text-base bg-white text-[#1F0954] font-bold px-6 rounded-lg py-2.5">Update Profile</button>
        </main>
    </section>
  )
}

export default WelcomeMessage
