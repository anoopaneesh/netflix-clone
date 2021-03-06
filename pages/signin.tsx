import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from 'next/head'
import { useAuth } from "../context/AuthProvider";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { signin } = useAuth();
  const handleSignin = () => {
    if (email && password) {
      signin(email, password).then(() => {
        router.push("/home");
      }).catch(console.log);
    }
  };
  return (
    <div>
      <Head>
        <title>Sign In | Netflix Clone</title>
        </Head>
        <Header user={null}/>
      <Banner
        image="https://firebasestorage.googleapis.com/v0/b/netflix-clone-235c7.appspot.com/o/assests%2Fbanner.jpg?alt=media&token=e35f1827-1db2-4062-ab4f-c3bf1d88cc89"
        className="border-none h-screen"
      >
        <div className="h-full w-full absolute  flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black bg-opacity-70 text-white px-8 py-8 w-96 space-y-8">
            <h1 className="text-4xl font-bold">Sign In</h1>
            <div className="flex flex-col space-y-2">
              <input
                className="bg-[#222] px-4 py-4 rounded-sm outline-none"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="bg-[#222] px-4 py-4 rounded-sm outline-none"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-red-600 p-4 font-bold rounded-sm w-full"
              onClick={handleSignin}
            >
              Sign in
            </button>
            <div className="text-gray-500 space-y-2">
              <p>
                New to Netflix?{" "}
                <Link href="/">
                  <a className="text-white font-bold hover:underline cursor-pointer">
                    Sign up now.
                  </a>
                </Link>
              </p>
              <p className="text-xs">
                This page is protected by Google reCAPTCHA to ensure you&apos;re not
                a bot. Learn more.
              </p>
            </div>
          </div>
        </div>
      </Banner><Footer />
    </div>
  );
};

export default SignIn;
