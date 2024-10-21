import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Main page
      <Link className="text-blue-500" href='/dashboard'>Dashboard</Link>
      <Link className="text-blue-500" href='/dashboard/settings'>Settings</Link>
    </div>
  );
}
