import { useState, useEffect } from "react";
import { Header, Sidebar, Loader } from "../components";
import { MdPushPin, MdArrowCircleRight } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserMutation } from "../slices/user/usersApiSlice";
import { setCredentials } from "../slices/user/authSlice";
import { toast } from "react-toastify";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  // const history = useHistory(); // Initialize useHistory

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.name]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        console.log(res);
        dispatch(setCredentials(res));
        toast.success("Profile updated successfully");
        setPassword(""); // Clear the password field
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <Header />
        <section className="flex-1 w-full bg-white shadow p-4 mt-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-base flex items-center">
              <span>
                <MdPushPin className="text-xl mr-2 text-navy" />
              </span>
              Update your Profile
            </h2>
          </div>
          <div className="w-full border-b-2 mt-2 border-blueSecondary"></div>
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
              <div className="flex items-center justify-center mb-4">
                <h1 className="text-2xl font-semibold">User Profile</h1>
              </div>
              <form className="mt-6" onSubmit={submitHandler}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600 mb-2">
                    Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded-md focus:ring focus:ring-lightPrimary"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded-md focus:ring focus:ring-lightPrimary"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-600 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded-md focus:ring ffocus:ring-lightPrimary"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-600 mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-2 border rounded-md focus:ring ffocus:ring-lightPrimary"
                    placeholder="Confitm your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 bg-blueSecondary text-white p-2 rounded-md hover:bg-blue-600"
                >
                  Update Profile
                </button>
                {isLoading && (
                  <div className="flex justify-center mt-4">
                    <Loader />
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
