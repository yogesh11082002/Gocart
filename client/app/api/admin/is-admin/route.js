import authAdmin from "@/middlewares/authAdmin";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Auth Admin


export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const  isAdmin = await  authAdmin(userId);

    if (!isAdmin) {
        return NextResponse.json({error:"not Authorised Admin"}, {status:401})
    }

    
    return NextResponse.json({isAdmin});

  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
