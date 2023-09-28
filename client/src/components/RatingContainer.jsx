const RatingContainer = () => {
    return (
      <div className="self-stretch flex flex-row py-[1.25rem] px-[0rem] items-center justify-center gap-[1rem] text-left text-[1.5rem] text-black font-poppins">
        <div className="flex flex-row items-center justify-center gap-[1.44rem]">
          <div className="flex flex-col items-start justify-center">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="relative tracking-[0.05em] font-medium">
                Rate the mess
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center gap-[0.31rem]">
              <div className="flex flex-col items-center justify-center">
                <img
                  className="relative rounded-[1.63px] w-[2.88rem] h-[2.7rem] shrink-0"
                  alt=""
                  src="/star-61.svg"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="relative rounded-[1.63px] w-[2.88rem] h-[2.7rem] shrink-0"
                  alt=""
                  src="/star-61.svg"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="relative rounded-[1.63px] w-[2.88rem] h-[2.7rem] shrink-0"
                  alt=""
                  src="/star-61.svg"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="relative rounded-[1.63px] w-[2.88rem] h-[2.7rem] shrink-0"
                  alt=""
                  src="/star-61.svg"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="relative rounded-[1.63px] w-[2.88rem] h-[2.7rem] shrink-0"
                  alt=""
                  src="/star-61.svg"
                />
              </div>
            </div>
          </div>
          <input
            className="font-light font-poppins text-[1rem] bg-[transparent] rounded-3xs box-border w-[23.44rem] h-[3.63rem] shrink-0 overflow-hidden flex flex-col py-[0.31rem] px-[0.88rem] items-start justify-start border-[1px] border-solid border-black"
            type="text"
            placeholder="Write A Review"
            maxLength={0}
            minLength={50}
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-[1.25rem]">
          <button className="cursor-pointer [border:none] py-[0rem] px-[0.63rem] bg-chocolate rounded-3xs w-[5rem] shrink-0 flex flex-row box-border items-center justify-center hover:bg-sandybrown-100">
            <div className="flex-1 relative text-[1rem] tracking-[0.05em] font-light font-poppins text-white text-left">
              Submit
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-[0rem] px-[0.63rem] bg-silver rounded-3xs w-[5.06rem] shrink-0 flex flex-row box-border items-center justify-center hover:bg-lightgray">
            <div className="flex-1 relative text-[1rem] tracking-[0.05em] font-light font-poppins text-black text-left">
              Cancel
            </div>
          </button>
        </div>
      </div>
    );
  };
  
  export default RatingContainer;
