import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	const hostName = request.nextUrl.hostname;

	if (
		hostName ===
		"00415268-middleware-params-git-main.preview.vercel-support.app"
	) {
		const url = request.nextUrl.clone();
		console.log("url", url);
		url.hostname = "00415268-middleware-params.preview.vercel-support.app";
		console.log("fixed url", url);
		console.log("url.href", url.href);
		console.log("url.toString()", url.toString());
		return new NextResponse(null, {
			headers: {
				location: url.href
			},
			status: 307
		});
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
	],
};
