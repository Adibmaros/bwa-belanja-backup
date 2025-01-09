import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function POST(req, res){
    const body = await req.json();

   try {
       const code = body.data.reference_id;

       await prisma.order.update({
           where : {
               code : code
           },
           data : {
               status : body.data.status === "SUCCEEDED" ? "success" : "failed"
           }
       })
   }
   catch (err){
       console.error(err);
       res.status(500).json({message : "An error occurred while updating the order status."})
   }
   return NextResponse.json({status : true})


}