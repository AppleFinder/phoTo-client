"use client"

import Link from "next/link"

export default function TopNavigation() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-white relative z-10">
      <Link href="/" className="text-2xl font-bold text-black">
        phoTo
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/pose_recommendation" className="text-sm text-gray-700 hover:text-black transition-colors">
          poses
        </Link>
        <Link href="/pose_correction" className="text-sm text-gray-700 hover:text-black transition-colors">
          {" "}
          {/* Updated link */}
          frames
        </Link>
        <Link href="/basket" className="text-sm text-gray-700 hover:text-black transition-colors">
          basket
        </Link>
      </div>
    </nav>
  )
}
