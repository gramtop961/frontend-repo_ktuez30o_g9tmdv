export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#f5f5f5]/70 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} StepWize</div>
        <div className="flex gap-4 text-sm">
          <a href="/" className="cursor-pointer hover:text-[#00ff88]">Home</a>
          <a href="/auth" className="cursor-pointer hover:text-[#0088ff]">Login</a>
          <a href="/dashboard" className="cursor-pointer hover:text-[#ff0080]">Dashboard</a>
        </div>
      </div>
    </footer>
  )
}
