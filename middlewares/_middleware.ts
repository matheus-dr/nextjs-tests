import {NextApiRequest} from "next";
import {NextFetchEvent, NextResponse} from "next/server";

// Verify how middlewares in Next works
export function middleware(req: NextApiRequest, ev: NextFetchEvent): NextResponse {
    if (req.url?.endsWith('/blog/a')) {
        return NextResponse.rewrite('/');
    }

    return NextResponse.rewrite('/');
}
