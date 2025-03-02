'use client'

import Posts from "./components/Home/Posts";
import SidePanel from "./components/Home/SidePanel";
import { useState } from "react";


export default function Home() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex">
        <div className="hidden sm:block sm:w-2/12">
          <SidePanel open={open} setOpen={setOpen} />
        </div>
        <Posts />
      </div> 
      {/* <Discussions /> */}
    </>
  );
}
