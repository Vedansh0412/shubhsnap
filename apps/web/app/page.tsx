"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20 grid gap-12 md:grid-cols-2 items-center">
        {/* LEFT: Text + Large Magnet */}
        <div className="text-center md:text-left">
          {/* Large Magnet Preview */}
          <img
            src="/mockups/sample-magnet.png"
            alt="Sample magnet"
            className="
              mx-auto md:mx-0
              mb-6
              w-40 h-40
              sm:w-48 sm:h-48
              md:w-60 md:h-60
              rounded-full
              shadow-[0_6px_16px_rgba(0,0,0,0.25)]
            "
          />

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Turn Your Memories into
            <br />
            <span className="text-black">Fridge Magnets</span>
          </h2>

          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-700">
            Upload your favorite photo, customize the shape, and
            preview how it looks on your fridge — before you buy.
          </p>

          <button
            onClick={() => router.push("/customize")}
            className="cursor-pointer mt-6 md:mt-8 rounded bg-black px-8 py-3 text-white text-base"
          >
            Start Customizing
          </button>
        </div>

        {/* RIGHT: Fridge Preview */}
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <img
            src="/mockups/fridge.png"
            alt="Fridge preview"
            className="w-full rounded-lg"
          />

          <img
            src="/mockups/sample-magnet.png"
            alt="Sample magnet on fridge"
            className="
              absolute
              top-[20%]
              right-[18%]
              w-8 h-8
              sm:w-9 sm:h-9
              md:w-10 md:h-10
              rounded-full
              shadow-[0_2px_6px_rgba(0,0,0,0.25)]
              -rotate-1
            "
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-14 md:py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <h3 className="text-2xl font-semibold text-center">
            How it works
          </h3>

          <div className="mt-10 md:mt-12 grid gap-8 md:grid-cols-3 text-center">
            <div>
              <p className="text-lg font-medium">1. Upload Photo</p>
              <p className="mt-2 text-sm md:text-base text-gray-600">
                Choose a photo from your device
              </p>
            </div>

            <div>
              <p className="text-lg font-medium">2. Customize</p>
              <p className="mt-2 text-sm md:text-base text-gray-600">
                Adjust zoom & position, pick shape
              </p>
            </div>

            <div>
              <p className="text-lg font-medium">3. Order</p>
              <p className="mt-2 text-sm md:text-base text-gray-600">
                Preview on fridge & place order
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <footer className="py-14 md:py-16 text-center">
        <h4 className="text-2xl font-semibold">
          Ready to create your magnet?
        </h4>

        <button
          onClick={() => router.push("/customize")}
          className="cursor-pointer mt-6 rounded bg-black px-8 py-3 text-white"
        >
          Create Now
        </button>
      </footer>
    </main>
  );
}
