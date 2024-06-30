import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <div className="flex flex-col px-3 py-4 md:px-2 border-2 border-indigo-800 rounded-2xl md:h-screen h-auto">
        <Link
            className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
            href="/"
        >
            <div className="w-32 text-white md:w-40">
                <AcmeLogo/>
            </div>
        </Link>
    <div className="flex grow md:justify-between justify-center gap-2 space-x-2 flex-col md:space-x-0 md:space-y-2">
        <div className={"flex md:flex-col flex-row gap-5"}>
            <NavLinks />
        </div>
        <div className="hidden h-auto w-full grow md:block
           dark:text-tremor-background-muted tremor-Callout-root rounded-tremor-default text-tremor-default bg-indigo-500 border-indigo-700 text-indigo-700 dark:bg-opacity-10 bg-opacity-10 border-l-4
        "></div>
        <form className={"mt-auto"}>
            <button className="flex h-[48px] justify-center items-center w-full grow gap-2 font-medium md:flex-none md:justify-start md:p-2 md:px-3
                            tremor-Callout-root rounded-tremor-default text-tremor-default bg-red-700 border-red-700
                            text-red-700 dark:bg-opacity-10 bg-opacity-10 border-4"
            >
                <PowerIcon className="w-6"/>
                <div className="hidden md:block text-center">Sign Out</div>
            </button>
        </form>
      </div>
    </div>
  );
}

/*
<Card decoration="right" decorationColor="indigo" className="flex gap-2 h-full flex-col px-3 py-4 md:px-2">


          <div className="flex flex-1  flex-row  space-x-2 md:flex-col md:space-x-0 md:space-y-2">
              <NavLinks/>
          </div>
          <div>
              <form>

              </form>
          </div>
      </Card>
 */
