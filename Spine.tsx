import Link from "next/link";

export default function Spine() {
  return (
    <div
      className="hidden md:flex fixed left-0 top-0 h-full w-16 border-r border-line
                 items-center justify-center z-10"
      aria-hidden="false"
    >
      <Link
        href="/"
        className="spine font-mono text-xs tracking-[0.3em] uppercase text-mist
                   hover:text-pine transition-colors"
      >
        Fieldnotes — dated entries
      </Link>
    </div>
  );
}
