import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import Notification from "../notification";
import notification from "../Toastify";
import Toastify from "../Toastify";
import { toast } from "react-toastify";

const Mainpage = () => {
  const initialValues = {
    cardname: "",
    cardnumber: "",
    month: "",
    year: "",
    cvc: "",
  };
  const [formValue, setFormValue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   console.log(e.target);
  //   const { name, value } = e.target;
  //   setFormValue({ ...formValue, [name]: value });
  //   console.log(formValue);
  // };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   let truncatedValue = value;
  //   if (name === "month" || name === "year") {
  //     // Ensure only numbers are entered
  //     const onlyNumbers = value.replace(/[^0-9]/g, "");
  //     // Restrict the length to 2 characters
  //     truncatedValue = onlyNumbers.slice(0, 2);
  //   }
  //   setFormValue({ ...formValue, [name]: truncatedValue });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    let truncatedValue = value;
    if (name === "month" || name === "year") {
      // Ensure only numbers are entered
      const onlyNumbers = value.replace(/[^0-9]/g, "");
      // Restrict the length to 2 characters
      truncatedValue = onlyNumbers.slice(0, 2);
    } else if (name === "cardnumber") {
      // Ensure only numbers are entered
      const onlyNumbers = value.replace(/[^0-9]/g, "");
      // Restrict the length to 16 characters
      truncatedValue = onlyNumbers.slice(0, 16);
    } else if (name === "cvc") {
      // Ensure only numbers are entered
      const onlyNumbers = value.replace(/[^0-9]/g, "");
      // Restrict the length to 3 characters
      truncatedValue = onlyNumbers.slice(0, 3);
    }
    setFormValue({ ...formValue, [name]: truncatedValue });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValue));
  //   setIsSubmit(true);
  //   console.log(setFormErrors(validate(formValue)));

  //   console.log(formValue);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValue);
    setFormErrors(errors);
    // setIsSubmit(Object.keys(errors).length === 0);
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
      toast.success("Signed in");
    } else {
      setIsSubmit(false);
      // Trigger toast for each error
      // Object.keys(errors).forEach((key) => {
      //   toast.error(errors[key]);
      // });
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.cardname) {
      errors.cardname = "Card name is required!";
      toast.error("Card name is required!");
    }
    if (!values.cardnumber) {
      errors.cardnumber = "Card number is required!";
      toast.error("Card number is required!");
    } else if (values.cardnumber.length !== 16) {
      errors.cardnumber = "Invalid card number!";
      toast.error("Invalid card number!");
    }
    if (!values.month) {
      errors.month = "Expiration month is required!";
    } else if (parseInt(values.month) < 1 || parseInt(values.month) > 12) {
      errors.month = "Invalid month!";
      toast.error("Invalid month!");
    }
    // if (!values.year) {
    //   errors.year = "Expiration year is required!";
    // } else if (parseInt(values.year) < new Date().getFullYear() % 100) {
    //   errors.year = "Invalid year!";
    //   toast.error("Invalid year!");
    // }
    if (!values.year) {
      errors.year = "Expiration year is required!";
    } else if (values.year.length !== 2) {
      errors.year = "Invalid year!";
      toast.error("Invalid year!");
    }
    if (!values.cvc) {
      errors.cvc = "CVC is required!";
      toast.error("CVC is required!");
    } else if (values.cvc.length !== 3) {
      errors.cvc = "Invalid CVC!";
      toast.error("Invalid CVC!");
    }
    return errors;
  };

  const getInputClass = (name) => {
    return `block w-full bg-transparent border placeholder:text-xl mt-2 px-4 py-4 mb-4 border-gray-400 outline-none rounded-lg ${
      formErrors[name] ? "border-red-700" : "border-gray-400"
    }`;
  };

  const renderCardNumber = (cardNumber) => {
    // Remove any non-numeric characters
    const numericOnly = cardNumber.replace(/\D/g, "");
    // Insert a space after every four characters
    const formattedNumber = numericOnly.replace(/(.{4})/g, "$1 ");
    // Trim any trailing space
    return formattedNumber.trim();
  };

  return (
    <>
      {/* <ToastContainer
        position="bottom-right"
        autoClose={50}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      {/* <Notification /> */}
      <Toastify />
      <div className="flex flex-col lg:flex-row w-full h-screen relative ">
        {/* TOP */}
        <div
          className=" basis-[40%] bg-center bg-no-repeat bg-cover bg-slate-700"
          style={{ backgroundImage: 'url("/bg-main-desktop.png")' }}
        ></div>
        {/* BOTTOM */}
        <div className="w-full flex-auto basis-[60% bg-white   lg:flex lg:justify-center lg:items-center">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className=" flex flex-col gap-8 items-center px-8 justify-center mt-28">
              <img src="/icon-complete.svg" width={140} alt="" />
              <h1 className=" text-5xl font-semi-bold">THANK YOU!</h1>
              <p className=" text-gray-300 font-bold text-3xl">
                We've added your card details
              </p>
              <button className=" w-full px-4 py-4 mt-8 rounded-lg text-white text-2xl font-semibold bg-fuchsia-500">
                Continue
              </button>
            </div>
          ) : (
            <div className=" mt-28 px-8  ">
              <form action="" onSubmit={handleSubmit} className="">
                <label htmlFor="" className=" text-xl  font-bold">
                  CARDHOLDER NAME
                </label>
                <input
                  type="text"
                  name="cardname"
                  value={formValue.cardname}
                  onChange={handleChange}
                  placeholder="e.g Jane Doe"
                  // className=" block w-full bg-transparent border placeholder:text-xl mt-2 px-4 py-4 mb-4 border-gray-400 outline-none rounded-lg"
                  className={getInputClass("cardname")}
                />
                <p>{formErrors.cardname}</p>

                <label htmlFor="" className=" text-xl  font-bold">
                  CARD NUMBER
                </label>
                <input
                  type="text"
                  name="cardnumber"
                  value={formValue.cardnumber}
                  onChange={handleChange}
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
                      maxLength="2"
                      value={formValue.month}
                      onChange={handleChange}
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
                      name="year"
                      placeholder="YY"
                      maxLength="2"
                      value={formValue.year}
                      onChange={handleChange}
                      className="block border border-gray-300 w-[6rem]  placeholder:text-2xl mt-2 rounded-lg px-4 py-4"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className=" text-xl  font-bold">
                      CVC
                    </label>
                    <input
                      type="number"
                      name="cvc"
                      value={formValue.cvc}
                      onChange={handleChange}
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
          )}
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
          <h1 className="w-full">
            {formValue.cardnumber
              ? renderCardNumber(formValue.cardnumber).toUpperCase()
              : "0000 0000 0000 0000"}
          </h1>
        </div>
        {/* details */}
        <div>
          {/* name */}
          <div className=" flex items-center j gap-[56%] mt-4">
            <h1>
              {formValue.cardname
                ? formValue.cardname.toUpperCase()
                : "JaneDoe"}
            </h1>
            <h1>
              {formValue.month && formValue.year
                ? `${formValue.month.padStart(2, "0")}/${formValue.year}`
                : "MM/YY"}
            </h1>
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
          <h1 className=" absolute top-[43%] right-[10%] text-xl">
            {formValue.cvc ? formValue.cvc : "000"}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
