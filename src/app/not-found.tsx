import Link from "next/link";

import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="text-black/70">The page you are looking for does not exist.</p>
      <Link href="/" className="font-semibold text-prime-blue-600 hover:underline">
        Back to home
      </Link>
    </Container>
  );
}
