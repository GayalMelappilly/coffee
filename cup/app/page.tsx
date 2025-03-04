'use client'

import Posts from "./components/Home/Posts";
import SidePanel from "./components/Home/SidePanel";
import { useEffect, useState } from "react";
import { getAccessToken } from "./hooks/getAccessToken";
import { useRouter } from "next/navigation";


export default function Home() {

  const [open, setOpen] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const token = await getAccessToken()
        if(!token){
          router.push("/sign-in")
        }
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };
    fetchAccessToken();
  });


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
