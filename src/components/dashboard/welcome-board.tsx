function WelcomeBoard() {
  return (
    <div className="bg-[#6f01d0] flex flex-col gap-y-[2px] md:flex-row items-center justify-between py-1 px-6 rounded-md">
      <p className="text-white text-sm lg:text-2xl font-medium">
        Welcome Aboard, Blessing👋
        {/* 🖐️👏 */}
      </p>
      <p className="text-[var(--text-neutral)] text-center text-[10px] lg:text-lg">
        We’re thrilled to have you join Techrity Team!
      </p>
      <button className="focus:outline-0 rounded-lg flex justify-center items-center py-1 md:py-1.5 px-2 lg:px-4   text-[var(--text-primary)] bg-white font-semibold text-[10px] sm:text-xs lg:text-sm">
        Update profile
      </button>
    </div>
  );
}

export default WelcomeBoard;
