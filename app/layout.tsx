import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "ShubhSnap",
  description: "Create custom photo fridge magnets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
      </body>
    </html>
  );
}
