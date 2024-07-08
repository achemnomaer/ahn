import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const Modal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-primary text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />

            <div className="relative z-10">
              <div className="mb-2 grid place-items-center mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  className="text-white w-16 h-16 mx-auto "
                >
                  <path
                    fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">
                Message has been sent successfully!
              </h3>
              <p className="text-center mb-6">I will get back to you soon</p>
              <div className="grid place-items-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-primary font-semibold w-full py-2 rounded"
                >
                  Got it!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
