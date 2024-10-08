"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getUserId } from "@/utils/auth";

export default function RowThreadss({username}:{username:string}){

   return(
      <div className="flex ">
         <Link  href={`/@${username}`} className="w-1/3 flex border-black justify-center border-solid border-b-[1px]">
            <button  className="h-[46px] text-sm font-bold">Thread</button> 
         </Link>
         <Link  href={`/@${username}/threadreplied`} className="w-1/3 flex justify-center border-solid border-b-[1px]">
            <button  className="h-[46px] text-gray-400 text-sm font-bold">Thread trả lời</button> 
         </Link>
         <Link  href={`/@${username}/threadreporsts`} className="w-1/3 flex justify-center border-solid border-b-[1px]">
            <button  className="w-[120px] md:w-[210px] h-[46px] border-solid border-b-[1px] text-gray-400 text-sm font-bold">Bài đăng lại</button> 
         </Link>
      </div>
   )
}