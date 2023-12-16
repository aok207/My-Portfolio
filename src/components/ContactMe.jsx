import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactMe() {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(true);

  const emailInputOnChange = (e) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regex
    const isValidEmail = emailRegex.test(e.target.value);

    // Update the state based on the validation result
    setEmailIsValid(isValidEmail);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    // Get the form data and store them in the entries object
    const formData = new FormData(event.currentTarget);
    const entries = {};
    for (let [key, value] of formData.entries()) {
      entries[key] = value;
    }

    if (entries.email === "" || entries.message === "") {
      setSubmitting(false);
      toast.error("You must fill in all the fields!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Call the API
    if (isCaptchaVerified) {
      fetch(import.meta.env.VITE_SERVER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entries),
      })
        .then((res) => {
          setSubmitting(false);
          if (!res.ok) {
            toast.error(res.error, {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            return res.json();
          }
        })
        .then((data) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          toast.success(data.message ? data.message : data.error, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        })
        .catch((err) =>
          toast.error(err, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
        );
    } else {
      setSubmitting(false);
      toast.error("You must complete the reCAPTCHA!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <section
      id="contact"
      className="flex justify-center bg-blue-100/30 gap-10 py-20 dark:bg-gray-950"
    >
      <div>
        <div className="text-center">
          <p className="text-gray-500 text-lg font-bold">Get In Touch</p>
          <h1 className="text-3xl font-semibold dark:text-slate-300">
            Contact Me
          </h1>
        </div>
        <div className="flex justify-center">
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <form
            className="max-[440px]:w-[300px] w-[440px]"
            onSubmit={handleFormSubmit}
          >
            <h3 className="text-2xl mt-5 font-semibold mb-10 text-center dark:text-gray-200">
              Send me an email. I&apos;ll reply in no time.
            </h3>
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="name" className="text-slate-500 font-semibold">
                Name
              </label>
              <input
                type="text"
                required
                id="name"
                name="name"
                className="border w-full border-slate-500 h-15 rounded-md p-4 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 max-[850px]:w-full dark:bg-gray-950 dark:text-white"
              />
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="email" className="text-slate-500 font-semibold">
                Email
              </label>
              <input
                type="email"
                required
                id="email"
                name="email"
                className={`border ${
                  emailIsValid
                    ? "border-slate-500 focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                    : "border-pink-600 focus:ring-1 focus:ring-pink-600 text-pink-600"
                } h-15 rounded-md p-4 focus:outline-none max-[850px]:w-full w-full dark:bg-gray-950 dark:text-white`}
                onChange={(e) => emailInputOnChange(e)}
              />
              {emailIsValid ? null : (
                <p className="mt-2 text-pink-600 text-sm">
                  Please provide a valid email address.
                </p>
              )}
            </div>
            <div className="flex flex-col mb-5 gap-2">
              <label htmlFor="message" className="text-slate-500 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Type your message..."
                cols="20"
                rows="10"
                className="border border-slate-500 rounded-md p-3 resize-none  focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 dark:bg-gray-950 dark:text-white"
                required
              ></textarea>
            </div>
            <div className="flex flex-col dark:bg-gray-950">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_Site_Key}
                onChange={() => setIsCaptchaVerified(true)}
                className="mx-auto"
              />
              {!isSubmitting ? (
                <button
                  type="submit"
                  className="hoverable border border-slate-300 p-3 w-full rounded-md mt-5 bg-purple-800 text-white group relative overflow-hidden hover:ring-2 hover:ring-offset-2 hover:ring-purple-700 active:ring-2 active:ring-offset-2 active:ring-purple-700 transition-all duration-300 ease-in-out max-[850px]:w-full focus:ring-2 focus:ring-purple-700 uppercase dark:border-purple-800 dark:bg-purple-900 dark:hover:bg-purple-800 dark:hover:ring-offset-black"
                >
                  Submit
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine dark:bg-black" />
                </button>
              ) : (
                <button
                  disabled
                  type="button"
                  className="hoverable p-3 flex justify-center items-center bg-purple-800 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg max-w-md mt-5"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2 animate-spin"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                  </svg>
                  SUBMITTING
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
