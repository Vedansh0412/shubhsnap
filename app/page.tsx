export default function Home() {
  const env = process.env.NEXT_PUBLIC_APP_ENV;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold">ShubhSnap 🚀</h1>

      <span
        className={`rounded px-3 py-1 text-sm font-medium ${
          env === "production"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {env === "production" ? "PRODUCTION" : "DEVELOPMENT"}
      </span>
    </main>
  );
}
