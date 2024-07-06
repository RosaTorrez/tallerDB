import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest, res: NextResponse, next: Function){
    console.log("POST")
    return NextResponse.next()
}

export async function GET(req: NextRequest, res: NextResponse, next: any){

}

export async function PUT(){

}

export async function DELETE(){

}

export async function PATCH(){

}

export async function OPTIONS(){

}


