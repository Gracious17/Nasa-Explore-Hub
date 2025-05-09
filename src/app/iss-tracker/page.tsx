"use client";

import { useEffect,useState } from "react";
import dynamic from "next/dynamic";
import {motion} from 'framer-motion';

// dynamic import of ISS compo
const ISSMap=dynamic(()=>import('@/components/ISSMap'),{ssr:false})
 

type position ={
    latitude:number;
    longitude:number;
};

export default function ISSTrackerPage(){
    const [position,setPosition]=useState<position|null>(null);

    useEffect(()=>{
        const getPosition=async()=>{
             const res = await fetch('/api/iss');
             const data =await res.json()
             setPosition({latitude:+data.latitude,longitude:+data.longitude})
        };
        getPosition();
        const interval=setInterval(getPosition,5000);
        return ()=>clearInterval(interval);
    },[]);
    if(!position) return <p className="text-center text-gray-400">Tracking ISS...</p>
return(
    <motion.div
    initial={{opacity:0,y:30}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5}}
    className="space-y-4"
    >
<h1 className="text-3xl font-bold text-center">ISS Live Tracker</h1>
<p>Latitude:{position.latitude.toFixed(2)} | Longitude: {position.longitude.toFixed(2)}</p>
<div className="h-[400px] rounded overflow-hidden">
    {/* ISS MAP compo */}
    <ISSMap latitude={position.latitude} longitude={position.longitude}/>
</div>

    </motion.div>
)
}