import  {NextResponse} from 'next/server';

export async function GET(){
    const  res=await fetch('http://api.open-notify.org/iss-now.json');
    const data=await res.json();
    return NextResponse.json(data.iss_position);
}