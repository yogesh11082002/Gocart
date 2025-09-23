import prisma from "@/lib/prisma";


export async function GET(request) {
  try {
    
    let products = await prisma.product.findMany({
        where: {inStock:true},
        include:{
            rating:{
                select:{
                    createdAt:true , rating:true, review:true , 
                    user:{ select:{name:true , image:true}}
                }
            }
        }
    })

  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
