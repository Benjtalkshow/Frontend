import React from "react";
import Header from "@/layouts/Header";
import Sidebar from "@/layouts/profile/Sidebar";
import ProfilePicture from "@/components/profile/ProfilePicture";
import ProfileForm from "@/components/profile/ProfileForm";
import AccountOverview from "@/components/profile/AccountOverview";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-5xl mx-auto mt-8 flex h-full">
        <Sidebar />
        <div className="w-3/4 pl-8 overflow-hidden">
          <h1 className="text-2xl font-semibold mb-6 text-black">
            Edit profile
          </h1>
          <div className="flex items-center gap-6 mb-6">
            <ProfilePicture />
            <textarea
              placeholder="Summary"
              defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              className="border border-gray-300 rounded-lg p-4 w-full text-black"
              rows={3}
            />
          </div>
          <ProfileForm />
          <AccountOverview />
          <div className="text-right">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
