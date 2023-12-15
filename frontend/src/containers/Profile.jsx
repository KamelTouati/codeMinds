import React from "react";
import { BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

function Profile() {
  // Sample profile data
  const profileData = {
    name: "Johnatan Smith",
    description: "Full Stack Developer",
    location: "Bay Area, San Francisco, CA",
    email: "example@example.com",
    address: "Bay Area, San Francisco, CA",
    // Add more profile information as needed
  };

  return (
    <>
      <div className="mx-10 container PX-5 py-5 overflow-x-hidden">
        <h1 className="py-4 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 ">
          Information :
        </h1>
        <div className="flex flex-col lg:flex-row mb-2 user-info">
          <div className="container mx-0 py-2">
            <div className="bg-light rounded-3 p-3 mb-4 breadcrumb">
              <nav className="breadcrumb"></nav>
            </div>

            <div className="flex gap-10 flex-col lg:flex-row mb-4 user-info">
              <div className="bg-white shadow-lg rounded-lg p-4 relative">
                {/* Wrapper with shadow */}
                <div className="mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle w-32 h-32 mx-auto lg:mx-0"
                  />
                </div>
                <p className="text-muted mb-1">{profileData.description}</p>
                <p className="text-muted mb-4">{profileData.location}</p>
                <div className="flex mb-2"></div>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-16 relative">
                {/* Wrapper with shadow */}
                <div className="mb-4">
                  <div className="mb-3 flex">
                    <AiOutlineUser />
                    <span className="font-semibold ml-2">Full Name</span>
                    <span className="text-muted ml-2">{profileData.name}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="mb-3 flex">
                    <MdEmail />
                    <span className="font-semibold ml-2">Email</span>
                    <span className="text-muted ml-2">{profileData.email}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="mb-3 flex">
                    <BiLocationPlus />
                    <span className="font-semibold ml-2">Address</span>
                    <span className="text-muted ml-2">
                      {profileData.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="mb-4 lg:mb-0">
            <div className="bg-white relative shadow-lg rounded-lg p-4">
              {/* Wrapper with shadow */}
              <div className="mb-4">
                <p className="font-semibold mb-2">
                  <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                    Technical skills
                  </span>
                </p>
                <div className="mb-2">
                  <span className="font-semibold">Problem solving</span>
                  <span className="text-muted ml-2">80%</span>
                </div>
                <div className="progress mb-2">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Theoritical grasping</span>
                  <span className="text-muted ml-2">72%</span>
                </div>
                <div className="progress mb-2">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "72%" }}
                  ></div>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Practical experience</span>
                  <span className="text-muted ml-2">89%</span>
                </div>
                <div className="progress mb-2">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "89%" }}
                  ></div>
                </div>
                <div className="progress mb-2">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "66%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 lg:mb-0">
            <div className="bg-white relative shadow-lg rounded-lg p-4">
              {/* Wrapper with shadow */}
              <div className="mb-4">
                <p className="font-semibold mb-2">
                  <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
                    Soft skills
                  </span>
                </p>
                <div className="mb-2">
                  <span className="font-semibold">Leadership</span>
                  <span className="text-muted ml-2">70%</span>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Communication</span>
                  <span className="text-muted ml-2">50%</span>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Teamwork</span>
                  <span className="text-muted ml-2">88%</span>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Adaptability</span>
                  <span className="text-muted ml-2">60%</span>
                </div>
                <div className="progress mb-2">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
