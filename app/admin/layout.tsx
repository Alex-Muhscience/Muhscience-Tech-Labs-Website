// app/admin/layout.tsx
import { verifySession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = await verifySession();
  
  if (!isAuthenticated) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-primary p-4 text-white">
        Admin Dashboard
      </nav>
      <main className="p-4">{children}</main>
    </div>
  );
}