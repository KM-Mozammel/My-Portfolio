import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, {
    JsonWebTokenError,
    TokenExpiredError,
    NotBeforeError,
} from "jsonwebtoken";

// Note: middleware runs on Edge → we cannot write files here.
// We only console.error. Real file logging happens in API routes / server components.

export function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;

    if (pathname === "/admin/login") {
        return NextResponse.next();
    }

    const token = req.cookies.get("token")?.value;

    if (!token) {
        console.error(`[Middleware] No token | path: ${pathname}`);
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
        console.error(`[Middleware] JWT_SECRET missing | path: ${pathname}`);
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
        jwt.verify(token, secret);
        return NextResponse.next();
    } catch (err: unknown) {
        let type = "UnknownJWTError";
        let message = "JWT verification failed";

        if (err instanceof TokenExpiredError) {
            type = "TokenExpiredError";
            message = `Token expired at ${err.expiredAt}`;
        } else if (err instanceof NotBeforeError) {
            type = "NotBeforeError";
            message = `Token not active until ${err.date}`;
        } else if (err instanceof JsonWebTokenError) {
            type = "JsonWebTokenError";
            message = err.message;
        } else if (err instanceof Error) {
            type = err.name;
            message = err.message;
        }

        // Detailed console log (appears in terminal / Vercel logs)
        console.error(`
                [Middleware Auth Error]
                Type    : ${type}
                Message : ${message}
                Path    : ${pathname}
                Token   : ${token.slice(0, 20)}...
        `);

        return NextResponse.redirect(new URL("/admin/login", req.url));
    }
}

export const config = {
    matcher: ["/admin/:path*"],
};