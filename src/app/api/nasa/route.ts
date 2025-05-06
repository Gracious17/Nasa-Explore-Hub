import { NextResponse } from "next/server";

export async function GET(){
    const apiKey=process.env.NASA_API_KEY;
    if(!apiKey){
        console.error("❌ NASA_API_KEY is missing from environment variables.");

        return NextResponse.json({error:"NASA_APIKey not defined"},{status:500})
    }
    try{

        const res =await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
        if(!res.ok){
            const text=await res.text();
            return NextResponse.json({error:"NASA API error",details:text},{status:res.status});
        }
        const data=await res.json();
        return NextResponse.json(data)
    }catch(error){
return  NextResponse.json({error:"something went wrong",details:String(error)},{status:500})
    }
}