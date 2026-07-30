import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    // Allow access to the login route
    if (pathname === "/admin/login") {
        return NextResponse.next();
    }

    const token = req.cookies.get("token")?.value;

    if (!token) {
        console.error(`[Middleware] No token found | path: ${pathname}`);
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
        console.error(`[Middleware] JWT_SECRET missing from environment variables`);
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
        // Encoded secret is required by jose
        const secretKey = new TextEncoder().encode(secret);

        // Verify token
        await jwtVerify(token, secretKey);

        return NextResponse.next();
    } catch (err: unknown) {
        console.error(`[Middleware Auth Error] Token verification failed on path: ${pathname}`, err);
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }
}

export const config = {
    matcher: ["/admin/:path*"],
};