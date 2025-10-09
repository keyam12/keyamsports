
import Image from 'next/image'
export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto p-4 flex items-center gap-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="KEYAM SPORTS" width={160} height={40} />
        </div>
        <nav className="flex gap-4 ml-4">
          <a href="/" className="text-sm font-semibold">Home</a>
          <a href="/basketball" className="text-sm">Basketball</a>
          <a href="/baseball" className="text-sm">Baseball</a>
          <a href="/soccer" className="text-sm">Soccer</a>
          <a href="/livescores" className="text-sm">Live Scores</a>
          <a href="/odds" className="text-sm">Odds</a>
          <a href="/about" className="text-sm">About</a>
        </nav>
      </div>
    </header>
  )
}
