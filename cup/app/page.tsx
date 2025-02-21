"use client"

import Header from "./components/Header";
import Banner from "./components/Banner/Banner";
import Discussions from "./components/Home/Discussions";
import Posts from "./components/Home/Posts";
import SidePanel from "./components/Home/SidePanel";
import { useEffect, useState } from "react";


export default function Home() {

  const [open, setOpen] = useState(false)

  useEffect(()=>{
    console.log("CON : ", open)
  })

  return (
    <>
      <div className="flex">
        <div className="hidden sm:block sm:w-2/12">
          <SidePanel open={open} setOpen={setOpen} />
        </div>
        <Posts sidePanelOpen={open} />
      </div>
      {/* <Discussions /> */}
    </>
  );
}
