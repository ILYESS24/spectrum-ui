"use client";
import Link from "next/link";

import { Icons } from "./icon";

export default function Footer() {
  return (
    <footer className=" py-12 px-4 md:px-6 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
              <div className="h-6 w-6 bg-neutral-100 border-neutral-300 border dark:bg-white rounded-md flex items-center justify-center p-1">
                <Icons.logo className="h-5 w-5 text-black " />
              </div>

              <span className=" font-bold lg:inline-block">Aurion UI</span>
            </span>

            <h1 className="dark:text-gray-300 mt-4">
              Build by{" "}
              <span className="dark:text-[#039ee4] gap-2">
                <span>@Arihantjain</span>
                <span>{" & "}</span>
                <span>@itzamanjain</span>
              </span>
            </h1>
           
            <p className="text-sm dark:text-gray-400 mt-5">
              © {new Date().getFullYear()} Aurion UI. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Docs
                  </span>
                </li>
                <li>
                  <Link
                    href="/blocks"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Blocks
                  </span>
                </li>
                <li>
                  <Link
                    href="/colors"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Colors
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-600 dark:text-gray-400">
                    Github
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 dark:text-gray-400">
                    LinkedIn
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 dark:text-gray-400">
                    X
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Privacy Policy
                  </span>
                </li>
                <li>
                  <Link
                    href="/tos"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Terms of Service
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full flex mt-4 items-center justify-center   ">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none">
            AURION UI
          </h1>
        </div>
      </div>
    </footer>
  );
}
