"use client";
import { useEffect,useState } from "react";
import {motion} from 'framer-motion';
import Image from "next/image";

type ApodData = {
    title:string;
    url:string;
    explanation:string;
    date:string;
    media_type:string;
};

export default function PicturePage(){
    const [data,setData]=useState<ApodData|null>(null);

    useEffect(()=>{
        const fetcheData=async()=>{
            const res =await fetch('/api/nasa');
            const apod =await res.json()
            setData(apod)
        }
        fetcheData()
    },[])

    if(!data) return<p className="text-center text-gray-400">loading...</p>

    return(
        <motion.div
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.6}}
        className="space-y-4"
        >
            <h1 className="text-3xl font-bold text-center ">Astronomy Picture of the Day</h1>
            <p className="text-sm text-center text-gray-400">{data.date}</p>

            {
                data.media_type==='image'?(
                  <Image
                  
                  src={data.url}
                  alt={data.title}
                  fill
                  className="w-full max-h-[500px] object-cover rounded shadow"
                  />  
                ):(
                    <iframe
                    src={data.url}
                    title={data.title}
                    className="w-full h-96 rounded"
                    allow="encrypted-media"
                    />
                )
            }
<h2 className="text-xl font-semibold">{data.title}</h2>
<p className="text-justify text-gray-200">{data.explanation}</p>
        </motion.div>
    )
}