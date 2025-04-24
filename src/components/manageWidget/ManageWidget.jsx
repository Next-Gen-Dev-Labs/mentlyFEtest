"use client";
import { toggleWidget, updateCheckbox } from "@/redux/widgetSlice";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MyCheckBox from "./MyCheckBox";
import { widget } from "@/data/dashboard.json";

const ManageWidget = ({}) => {
  const [close, setClose] = useState(false);
  const showWidget = useSelector((state) => state.widget.showWidget);
  const checkboxes = useSelector((state) => state.widget.checkboxes);
  const beforeSave = useRef(checkboxes);
  const [data,setData] = useState([...checkboxes])
  const dispatch = useDispatch();
  const handleClose = () => {
    setClose((p) => !p);
    setTimeout(() => {
      dispatch(toggleWidget());
    }, 500);
  };
  const handleSaveChanges = (e) => {
    dispatch(updateCheckbox(beforeSave.current));
  };
  const handleReset = (e) => {
    setData(widget.sidebar.checkboxes)
    dispatch(updateCheckbox(widget.sidebar.checkboxes));
  };

  const updateACheckbox = (name) => {
    let upd = [...beforeSave.current].map((each) => {
      let nEach = { ...each };
      if (nEach.name === name) {
        nEach.checked = !nEach.checked;
      }
      return nEach;
    });
    beforeSave.current = upd;
  };
  useEffect(() => {
    setData(checkboxes);
  }, [checkboxes]);
  
  return (
    <div
      className={`w-full h-[100vh] overflow-y-scroll myScrollBar  absolute top-0 left-0 bg-white-901 backdrop-blur-[10px] z-[999] ${
        showWidget === true && "animate-jump-in"
      } ${close && "animate-jump-out"}  `}
    >
      {/* sidebar */}
      <div
        className={`bg-white w-[320px] lg:w-[450px] min-h-[100vh] over-y-scroll myScrollBar z-[81] fixed top-0 right-0 animate-fade-left  `}
      >
        {/* close */}
        <div className="mt-[57px] ms-[45px] me-[32px] border-b-[1px] border-b-gray-901 pb-[10px] flex items-center justify-end ">
          <Image
            width={24}
            height={24}
            loading="lazy"
            onClick={() => {
              handleClose();
            }}
            src="/svg/close.svg"
            alt="close widget"
          />
        </div>
        {/* intro */}
        <div className="mt-[63px] ms-[50px] ">
          <h2 className="font-Chivo font-bold text-[32px] text-purple-700 ">
            {" "}
            {widget.sidebar.h2}{" "}
          </h2>
          <p className="font-Chivo font-normal text-[12px] text-gray-902 mt-[18px] w-[90%] lg:w-[328px] ">
            {" "}
            {widget.sidebar.p}{" "}
          </p>
        </div>
        {/* checkboxes */}
        <div className="ps-[45px] pe-[52px] mt-[29px] pb-[100px] ">
          <form
            className="grid grid-cols-1 gap-y-[17px] "
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {data.map((each, i) => (
              <fieldset key={i} className="flexBetween px-[9px] px-2 ">
                <span className="flexBetween gap-[19px] ">
                  <Image
                    width={16}
                    height={16}
                    loading="lazy"
                    src={each.icon}
                    alt={each.name}
                  />
                  <span className=""> {each.name} </span>
                </span>

                <MyCheckBox
                  updateACheckbox={updateACheckbox}
                  defaultChecked={each.checked}
                  label={each.name}
                />
              </fieldset>
            ))}

            {/* buttons */}
            <fieldset className="flexCenter gap-[10px] lg:gap-[24px] mt-[39px] ">
              <button
                onClick={() => {
                  handleSaveChanges();
                }}
                className="w-fit h-fit text-nowrap py-2 px-3 lg:w-[161px] lg:h-[42.37px] rounded-[6.59px] border-[0.82px] border-purple-700  flexCenter font-Chivo font-bold text-[13.19px] text-white bg-purple-700 hover:animate-jump "
              >
                Save Changes
              </button>
              <button
                onClick={() => {
                  handleReset();
                }}
                className="w-fit h-fit text-nowrap py-2 px-3 lg:w-[161px] lg:h-[42.37px] rounded-[6.59px] border-[0.82px] border-purple-700  flexCenter font-Chivo font-bold text-[13.19px] bg-white text-purple-700 hover:animate-jump"
              >
                Reset to Default
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ManageWidget);
