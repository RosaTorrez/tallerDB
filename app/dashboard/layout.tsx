import React from "react";
import SideNav from "../ui/dashboard/sidenav";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col md:flex-row gap-2">
      <SideNav />
        <div className="flex-1 relative h-[100vh] border-2 border-blue-600 rounded-2xl">
            <div className="relative isolate px-6 pt-14 lg:px-8">
              {/*<div
                  className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-xl sm:-top-80"
                  aria-hidden="true"
              >
                <div
                    className="relative left-[calc(50%-11rem)] rounded-2xl aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                      clipPath:
                          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
              </div>*/}
                {children}
              {/*<div
                  className="absolute inset-x-0 bottom-[calc(100%)] -z-10 transform-gpu blur overflow-hidden sm:bottom-[calc(100%-30rem)]"
                  aria-hidden="true"
              >
                <svg
                    id="sw-js-blob-svg"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative left-[calc(50%+3rem)] rounded-2xl aspect-[1155/678] w-[36.125rem] -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] "

                >
                  <defs>
                    <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
                      <stop id="stop1" stopColor="rgba(10, 7, 49, 1)" offset="0%"/>
                      <stop id="stop2" stopColor="rgba(116, 37, 253, 1)" offset="100%"/>
                    </linearGradient>
                  </defs>
                  <path
                      fill="url(#sw-gradient)"
                      d="M19.8,-35.9C25.5,-31,30,-25.4,33.4,-19.4C36.8,-13.3,39.2,-6.6,39.9,0.4C40.6,7.5,39.7,14.9,36.3,21.1C33,27.3,27.3,32.3,20.8,36.4C14.4,40.5,7.2,43.8,-0.5,44.6C-8.1,45.4,-16.2,43.7,-22.1,39.3C-28,34.8,-31.7,27.6,-34,20.6C-36.4,13.6,-37.4,6.8,-37.9,-0.3C-38.3,-7.3,-38.1,-14.6,-35.2,-20.6C-32.3,-26.7,-26.6,-31.4,-20.2,-36C-13.9,-40.6,-7,-45.1,0,-45.1C7,-45.2,14,-40.8,19.8,-35.9Z"
                      width="100%"
                      height="100%"
                      transform="translate(50 50)"
                      strokeWidth={0}
                      style={{
                        transition: "all 0.3s ease 0s",
                      }}
                  />
                </svg>
              </div>*/}
            </div>

        </div>
    </main>
  );
}

export default DashboardLayout;
