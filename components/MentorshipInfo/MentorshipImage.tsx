import React from "react";

const MentorshipImage = () => {
  return (
    <section className="flex overflow-hidden flex-wrap gap-5 justify-center pb-9 mt-2.5 w-full max-md:max-w-full">
      <div className="w-full">
        <img
          loading="lazy"
          src="/images/user/banner.png"
          className="object-cover w-full"
          alt="Mentorship program image"
        />
      </div>
    </section>
  );
};

export default MentorshipImage;
