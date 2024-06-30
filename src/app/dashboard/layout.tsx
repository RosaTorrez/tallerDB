import React from "react";
import SideNav from "../ui/dashboard/sidenav";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
      <div
          className='flex md:h-screen h-auto flex-col md:flex-row md:overflow-hidden text-tremor-background-emphasis dark:text-tremor-background'>
          <div className='w-full flex-none md:w-64'>
              <SideNav/>
          </div>
          <div className='flex-grow relative p-6 md:overflow-y-auto md:p-12'>
              {children}
          </div>
      </div>
  );
}

export default DashboardLayout;
