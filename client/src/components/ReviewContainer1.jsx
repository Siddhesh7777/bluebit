const ReviewContainer1 = ({ productId, productDimensions }) => {
    return (
      <div className="self-stretch flex flex-row items-start justify-center gap-[5.38rem] text-left text-[2rem] text-black font-poppins">
        <div className="flex flex-row py-[1.25rem] pr-[0rem] pl-[0.63rem] items-start justify-start gap-[1.88rem]">
          <img
            className="relative w-[6.25rem] h-[6.25rem] shrink-0 object-cover"
            alt=""
            src={productId}
          />
          <div className="flex flex-col items-start justify-start gap-[0.63rem]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[6.25rem]">
              <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.05em]">Kartik Patil</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0.63rem] text-[1.5rem]">
                  <div className="flex flex-row items-center justify-center gap-[0.31rem]">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="relative rounded-[1.16px] w-[2.05rem] h-[1.92rem] shrink-0"
                        alt=""
                        src="/star-6.svg"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="relative rounded-[1.16px] w-[2.05rem] h-[1.92rem] shrink-0"
                        alt=""
                        src="/star-7.svg"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="relative rounded-[1.16px] w-[2.05rem] h-[1.92rem] shrink-0"
                        alt=""
                        src="/star-8.svg"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="relative rounded-[1.16px] w-[2.05rem] h-[1.92rem] shrink-0"
                        alt=""
                        src="/star-9.svg"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="relative rounded-[1.16px] w-[2.05rem] h-[1.92rem] shrink-0"
                        alt=""
                        src={productDimensions}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center">
                    <div className="relative tracking-[0.05em] font-light">
                      September 17,2022
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-end gap-[1.88rem] text-[0.88rem]">
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="relative w-[2.5rem] h-[2.5rem] shrink-0 object-cover"
                    alt=""
                    src="/thumbs-up@2x.png"
                  />
                  <div className="relative tracking-[0.05em] font-light">20</div>
                </div>
                <img
                  className="relative w-[2.5rem] h-[2.5rem] shrink-0 overflow-hidden"
                  alt=""
                  src="/threedotsvertical.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start text-[1.25rem] text-gray">
              <div className="flex-1 relative tracking-[0.05em] font-light">
                Lorem ipsum dolor sit amet consectetur. Eu tellus penatibus non
                nisl nibh orci. Nunc vitae donec id ut mauris.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-[0rem] px-[0.63rem] pb-[0.63rem] items-center justify-center gap-[0.63rem] text-dimgray-200">
          <div className="flex flex-row items-center justify-center">
            <div className="relative tracking-[0.05em]">
              Was this review helpful ?
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[1.88rem]">
            <button className="cursor-pointer [border:none] p-[0.24rem] bg-limegreen-400 rounded-[2.74px] w-[4.5rem] shrink-0 flex flex-row box-border items-center justify-center hover:bg-limegreen-200">
              <div className="relative text-[1.17rem] tracking-[0.05em] font-poppins text-green-200 text-left">
                Yes
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-[0.24rem] bg-coral rounded-[2.74px] w-[4.5rem] shrink-0 flex flex-row box-border items-center justify-center hover:bg-firebrick">
              <div className="relative text-[1.17rem] tracking-[0.05em] font-poppins text-red text-left">
                No
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ReviewContainer1;
