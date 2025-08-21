import React from 'react'

export const Hiw = () => {
  return (
    <div>
      <div className="mx-30 mt-20 relative flex">
        <div>
          <h1 className="text-6xl text-[#1815a1] font-semibold">Who we are?</h1>
          <p className="pt-12 text-[18px]">
            Bringing Healthcare to Your Doorstep, Instantly — Just Like{" "}
          </p>
          <p className="pr-18 mt-12 text-[21px]">
            Doc2you is a modern healthcare service platform that connects
            patients with verified doctors near them, providing quick and
            convenient medical consultations at their home or preferred
            location. Whether it's a routine checkup, a specialist visit, or
            emergency care—we're just a tap away.
          </p>
        </div>
        <div className="relative">
          <img className="w-600 mt- bottom-0" src="/docgroups.png" alt="" />
        </div>
      </div>

      <div className="pb-30 pt-5">
        <h1 className="text-6xl text-[#1815a1] pt-17 text-center font-semibold ">
          How It Works?..
        </h1>
        <p className="pt-4 text-[18px] text-center">
          Experience a seamless, step-by-step care process designed around your
          needs.
        </p>

        <img
          className="w-340 mx-auto select-none pointer-events-none"
          src="howitworks.png"
          alt="howitworks"
          onContextMenu={(e) => e.preventDefault()}
          draggable="false"
        />
      </div>

      <h1 className="text-[60px] text-[#d1d0ec] font-bold px-35 text-center pb-20">
        "Your health, delivered fast. Anytime, anywhere."
      </h1>
    </div>
  );
}
