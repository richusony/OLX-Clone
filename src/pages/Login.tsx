import guitar from "../assets/images/guitar.webp";
import { IoIosPhonePortrait } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "@firebase/auth";
import { auth, googleProvider } from "../firebase/setup";
import { useContext } from "react";
import userContext from "../context/UserContexts";

const Login = (props: any) => {
  const { setUser } = useContext(userContext);
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Now you can access user details such as email, name, and profile picture
      setUser({
        email: user.email,
        name: user.displayName,
        profileUrl: user.photoURL,
      });

      // You can then use these details as needed, such as storing them in state or passing them to other components
      // console.log('User Email:', userEmail);
      // console.log('User Name:', userName);
      // console.log('Profile Picture:', userProfilePicture);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <h1
                  onClick={() => props?.setLogin(false)}
                  className="font-semibold text-3xl cursor-pointer"
                >
                  X
                </h1>
                <div className="sm:flex sm:items-start">
                  {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div> */}
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    {/* <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Deactivate account
                    </h3> */}
                    <div className="mt-2">
                      <img src={guitar} className="w-20 h-20 ml-44" alt="" />
                      <p className="font-medium mt-5">
                        Help us to become one of the safest place to buy and
                        sell
                      </p>
                      <div className="flex items-center border-2 border-black p-2 rounded-md mt-12 cursor-pointer">
                        <IoIosPhonePortrait className="text-xl" />
                        <h1 className="font-semibold ml-3">
                          Continue with phone
                        </h1>
                      </div>
                      <div
                        onClick={googleLogin}
                        className="flex items-center border border-gray-300 p-2 rounded-md mt-4 cursor-pointer"
                      >
                        <FcGoogle className="text-xl" />
                        <h1 className="font-semibold ml-24">
                          Continue with Google
                        </h1>
                      </div>
                      <h1 className="text-center mt-4">OR</h1>
                      <h1 className="text-center mt-4 underline cursor-pointer">
                        Login with Email
                      </h1>
                      <h1 className="text-center text-sm mt-4">
                        All your personal details are safe with us.
                      </h1>
                      <h1 className="mx-auto text-center text-xs mt-4">
                        If you continue, you are accepting OLX Terms and
                        Conditions and Privacy Policy
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
