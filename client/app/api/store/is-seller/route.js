import prisma from "@/lib/prisma";
import authSeller from "@/middlewares/authSeller";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
// Auth seller


export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const  isSeller = await  authSeller(userId);

    if (!isSeller) {
        return NextResponse.json({error:"not Authorised"}, {status:401})
    }

    const storeInfo = await prisma.store.findUnique({
        where:{userId}
    })

    return NextResponse.json({isSeller,storeInfo});

  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
