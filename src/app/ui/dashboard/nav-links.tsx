"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
} from "@tremor/react";
/*
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Create User", href: "/dashboard/create", icon: UserPlusIcon },
];
 */

const links = [
  {
    title: "Client",
    children: [
      { name: "Home", href: "/dashboard", icon: HomeIcon },
      {
        name: "Invoices",
        href: "/dashboard/invoices",
        icon: DocumentDuplicateIcon,
      },
      {
        name: "Create User",
        href: "/dashboard/create",
        icon: UserPlusIcon,
      },
    ],
  },
  {
    title: "Movies",
    children: [
      { name: "Home", href: "/dashboard", icon: HomeIcon },
      {
        name: "Invoices",
        href: "/dashboard/invoices",
        icon: DocumentDuplicateIcon,
      },
      { name: "Create User", href: "/dashboard/create", icon: UserPlusIcon },
    ],
  },
  {
    title: "Movies",
    children: [
      { name: "Home", href: "/dashboard", icon: HomeIcon },
      {
        name: "Invoices",
        href: "/dashboard/invoices",
        icon: DocumentDuplicateIcon,
      },
      { name: "Create User", href: "/dashboard/create", icon: UserPlusIcon },
    ],
  },
  {
    title: "Movies",
    children: [
      { name: "Home", href: "/dashboard", icon: HomeIcon },
      {
        name: "Invoices",
        href: "/dashboard/invoices",
        icon: DocumentDuplicateIcon,
      },
      { name: "Create User", href: "/dashboard/create", icon: UserPlusIcon },
    ],
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={"/dashboard"}
        className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-dark-tremor-background-muted p-3 font-medium md:flex-none md:justify-start md:p-2 md:px-3 text-tremor-default border-[.5px]
            ${
              pathname === "/dashboard"
                ? "tremor-Callout-root bg-teal-500 border-teal-700 text-teal-700 font-bold dark:bg-opacity-10 bg-opacity-10 border-l-4 cursor-none"
                : "dark:text-tremor-background-muted tremor-Callout-root rounded-tremor-default text-tremor-default bg-indigo-500 border-indigo-700 text-indigo-700 dark:bg-opacity-10 bg-opacity-10 border-l-4"
            }`}
      >
        <HomeIcon className="w-6" />
        <p className="hidden md:block">Home</p>
      </Link>
      <AccordionList>
        {links.map((link) => {
          return (
            <Accordion>
              <AccordionHeader>{link.title}</AccordionHeader>
              <AccordionBody className={"flex flex-col gap-2"}>
                {link.children.map((child) => {
                  const LinkIcon = child.icon;
                  return (
                    <Link
                      key={child.name}
                      href={child.href}
                      className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-dark-tremor-background-muted p-3 font-medium md:flex-none md:justify-start md:p-2 md:px-3 text-tremor-default border-[.5px]
            ${
              pathname === child.href
                ? "tremor-Callout-root bg-teal-500 border-teal-700 text-teal-700 font-bold dark:bg-opacity-10 bg-opacity-10 border-l-4 cursor-none"
                : "dark:text-tremor-background-muted tremor-Callout-root rounded-tremor-default text-tremor-default bg-indigo-500 border-indigo-700 text-indigo-700 dark:bg-opacity-10 bg-opacity-10 border-l-4"
            }`}
                    >
                      <LinkIcon className="w-6" />
                      <p className="hidden md:block">{child.name}</p>
                    </Link>
                  );
                })}
              </AccordionBody>
            </Accordion>
          );
        })}
      </AccordionList>
    </>
  );
}
