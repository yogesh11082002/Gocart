import prisma from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const name = formData.get("name");
    const username = formData.get("username");
    const description = formData.get("description");
    const email = formData.get("email");
    const contact = formData.get("contact");
    const address = formData.get("address");
    const image = formData.get("image");

    // ✅ Check all required fields
    if (!name || !username || !description || !email || !contact || !address || !image) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const  store = await prisma.store.findFirst(
        {
            where:{userId:userId}
        }
    )
    if (store) {
        return NextResponse.json({status: store.status})
    }
    
    const isUsernameTaken = await prisma.store.findFirst({
        where:{ username: username.tolowercase() }
    })

    if (isUsernameTaken) {
         return NextResponse.json(
        { error: "Username is Already taken." },
        { status: 400 }
      );
    }

 const buffer = Buffer.from( await image.arrayBuffer());

    const response = await imagekit.upload({
      file: buffer,
      fileName: image.name,
      folder: "logos",
    });

    // optimize image 

    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "512" },
      ],
    });

    const newStore = await prisma.store.create({
        data: {
            userId,
            name,
            description,
            username:username.tolowercase(),
            email,contact,address,
            logo:optimizedImageUrl
        }
    })

    await prisma.user.update({
        where:{id : userId},
        data :{store :{connect:{ id: newStore.id}}}
    })
    return NextResponse.json(
      {
        success: true,
        message: "Applied , Waiting for Approval "
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST error:", error);
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
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const  store = await prisma.store.findFirst(
        {
            where:{userId:userId}
        }
    )
    if (store) {
        return NextResponse.json({status: store.status})
    }
    
    return NextResponse.json(
      {
        status :"not registered"
      }
    );
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
