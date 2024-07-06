import { NextResponse } from "next/server"

import { NextRequest,  } from "next/server"

export function middleware(req: NextRequest, res: NextResponse) {
  console.log("middleware")
  if (res.status === 401) {
    return {
        status: 401,
        body: "Unauthorized",
    }
  }

    return NextResponse.next()
}


export const config = {
  //all routes that start with /dashboard will have this middleware applied
  matcher: /^\/dashboard/,
}
