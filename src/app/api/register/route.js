import { NextResponse } from "next/server"
import connectDB from "../../utils/connectMongoDB"
import Users from "../../models/createUser"

export async function GET(req){
    return NextResponse.json("hi")
}

export async function POST(req){
    connectDB()
    const body = await req.json()
    console.log(body)
    
    const newPatient = await new Users({
        firstName: body.first_name,
        lastName: body.last_name,
        userName: body.user_name,
        phone: body.phone,
        email: body.email,
        password: body.password,
        agree: body.agree
    })

    // if(body?.name != null){
    //     const user = await newPatient.save()
    // } else{
    //     return
    // }
    

    return NextResponse.json("Patient Created")
}