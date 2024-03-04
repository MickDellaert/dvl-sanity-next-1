"use client"

import { useRouter } from 'next/navigation'

import React from 'react'

export default function ButtonTest() {

  const router = useRouter()

  return (<>
    {/* <div>ButtonTest</div> */}
    <div className='flex gap-9 mt-16 font-semibold tracking-widest text-xl'>
    <button onClick={()=>{router.push("/work/forgotten-inventions")}}>Forgotten Inventions</button>
    <button onClick={()=>{router.push("/work/bygone-toys")}}>Bygone Toys</button>
    <button onClick={()=>{router.push("/work/future-inventions")}}>Future Inventions</button>
    </div>
    </>
  )
}
