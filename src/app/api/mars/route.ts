import { NextResponse } from "next/server";
export async function GET(){
    const apiKey=process.env.NASA_API_KEY;
    const res=await fetch(`https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`);
    const data =await res.json();
    const sols=data.sol_keys||[];
    const result =sols.map((sol:string)=>({
        sol,
        temp:data[sol].AT?.av?.toFixed(1)||'N/A',
        pressure:data[sol].PRE?.av?.toFixed(1)||'N/A',
        wind:data[sol].HWS?.av?.toFixed(1)||'N/A',
    }));
    return NextResponse.json(result)
} 