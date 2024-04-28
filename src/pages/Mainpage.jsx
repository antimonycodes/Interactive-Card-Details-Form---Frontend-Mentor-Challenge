const Mainpage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-screen relative ">
        {/* TOP */}
        <div
          className=" basis-[40%] bg-center bg-no-repeat bg-cover bg-slate-700"
          style={{ backgroundImage: 'url("/bg-main-desktop.png")' }}
        ></div>
        {/* BOTTOM */}
        <div className="w-full flex-auto basis-[60% bg-white  lg:flex lg:justify-center lg:items-center">
          {/* form */}
          <div className=" mt-28 px-8  ">
            <form action="" className="">
              <label htmlFor="" className=" text-xl  font-bold">
                CARDHOLDER NAME
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g Jane Doe"
                className=" block w-full bg-transparent border placeholder:text-xl mt-2 px-4 py-4 mb-4 border-gray-400 outline-none rounded-lg"
              />
              <label htmlFor="" className=" text-xl  font-bold">
                CARD NUMBER
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g 1234 5678 9123 0000"
                className=" block w-full bg-transparent border placeholder:text-xl mt-2 px-4 py-4 mb-4 border-gray-400 outline-none rounded-lg"
              />
              <div className=" flex gap-4">
                <div>
                  <label htmlFor="" className=" text-xl  font-bold">
                    EXP.DATE
                  </label>
                  <input
                    type="number"
                    name="month"
                    placeholder="MM"
                    className="block border border-gray-300 w-[6rem]  placeholder:text-2xl mt-2 rounded-lg px-4 py-4"
                  />
                </div>
                <div>
                  <label htmlFor="" className=" text-xl  font-bold">
                    (MM/YY)
                  </label>
                  <input
                    type="number"
                    name="month"
                    placeholder="YY"
                    className="block border border-gray-300 w-[6rem]  placeholder:text-2xl mt-2 rounded-lg px-4 py-4"
                  />
                </div>
                <div>
                  <label htmlFor="" className=" text-xl  font-bold">
                    CVC
                  </label>
                  <input
                    type="number"
                    name="month"
                    placeholder="e.g 123"
                    className=" w-full block border border-gray-300 mt-2 placeholder:text-2xl rounded-lg px-4 py-4"
                  />
                </div>
              </div>
              <button className=" w-full px-4 py-4 mt-8 rounded-lg text-white text-2xl font-semibold bg-fuchsia-500">
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* cards */}
      {/* front Card */}
      <div
        className="  w-[23rem] h-fit sm:w-[30rem] text-white px-4 py-8 bg-no-repeat absolute top-[20%] left-[1%] sm:left-[10%] md:left-[15%] z-50 rounded-xl lg:left-[11%] "
        style={{ backgroundImage: 'url("/bg-card-front.png")' }}
      >
        {/* shapes */}
        <div className=" flex items-center gap-4">
          <div className=" w-14 h-14 rounded-full bg-white"></div>
          <div className=" w-6 h-6 bg-transparent rounded-full border-[2px] border-white"></div>
        </div>
        {/* Numbers */}
        <div className=" mt-8 text-2xl sm:text-3xl font-semibold tracking-[5px] ">
          <h1 className=" w-full">0000 0000 0000 0000</h1>
        </div>
        {/* details */}
        <div>
          {/* name */}
          <div className=" flex items-center j gap-[56%] mt-4">
            <h1>JANE APPLES</h1>
            <h1>00/00</h1>
          </div>
        </div>
      </div>
      {/* back card */}
      <div className=" w-fit h-fit rounded-lg bg-rose-800 t absolute z-0 top-[6%] lg:top-[45%] sm:left-[20%] md:left-[30%] lg:left-[20%] right-[10px]">
        <div
        // className=" w-full h-full relative text-white rounded-lg bg-no-repeat bg-cover bg-center  "
        // style={{ backgroundImage: 'url("/bg-card-back.png")' }}
        >
          <img src="/bg-card-back.png" alt="" />
          <h1 className=" absolute top-[43%] right-[10%] text-xl">000</h1>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
