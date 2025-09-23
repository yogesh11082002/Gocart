import prisma from "@/lib/prisma";
import authAdmin from "@/middlewares/authAdmin";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//toggle store  isActive

export async function POST(request) {
  try {
    const { userId } = getAuth(request);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const isAdmin = await authAdmin(userId);

    if (!isAdmin) {
      return NextResponse.json(
        { error: "not Authorised Admin" },
        { status: 401 }
      );
    }

    const { coupon } = await request.json();

    if (!coupon) {
      return NextResponse.json(
        { error: " Coupon not  found" },
        { status: 400 }
      );
    }

    coupon.code = coupon.code.toUpperCase();

    await prisma.coupon.create({
      data: coupon,
    });

    return NextResponse.json({ message: "Coupon added successfully" });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function DELETE(request) {
  try {
    const { userId } = getAuth(request);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const isAdmin = await authAdmin(userId);

    if (!isAdmin) {
      return NextResponse.json(
        { error: "not Authorised Admin" },
        { status: 401 }
      );
    }

    const {searchParams} = request.nextUrl;

    const code = searchParams.get('code')

    await prisma.coupon.delete({
        where:{code}
    })

    return NextResponse.json({message:"Coupon deleted Successfully"})


  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const isAdmin = await authAdmin(userId);

    if (!isAdmin) {
      return NextResponse.json(
        { error: "not Authorised Admin" },
        { status: 401 }
      );
    }


    const coupons = await prisma.coupon.findMany({})


    return NextResponse.json({coupons});
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

