// import { ToastContainer } from "react-toastify";
// import "react-toastify/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const Notification = () => {
//   return (
//     <div>
//       <ToastContainer position="bottom-right" />
//     </div>
//   );
// };

// export default Notification;

// const notification = () => {
//   return (
//     <div>
//       <ToastContainer position="bottom-right" />
//     </div>
//   );
// };

// export default notification;

const Toastify = () => {
  return (
    <div>
      {/* <ToastContainer position="top-right" /> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Toastify;
