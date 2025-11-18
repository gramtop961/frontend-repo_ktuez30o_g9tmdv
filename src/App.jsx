import { Routes, Route, Link } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0a0a0a]/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="cursor-pointer text-[#f5f5f5] font-bold">StepWize</Link>
        <nav className="hidden sm:flex items-center gap-6 text-[#f5f5f5]/80">
          <a href="#features" className="cursor-pointer hover:text-[#00ff88]">Features</a>
          <Link to="/auth" className="cursor-pointer hover:text-[#0088ff]">Auth</Link>
          <Link to="/dashboard" className="cursor-pointer hover:text-[#ff0080]">Dashboard</Link>
        </nav>
      </div>
    </header>
  )
}

function Landing() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  )
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-2 text-[#f5f5f5]/80">Protected area. Coming next: tasks, stats, and focus mode.</p>
        <a href="/" className="cursor-pointer inline-flex mt-6 rounded-xl px-5 py-3 font-semibold bg-[#00ff88] text-[#0a0a0a]">Back Home</a>
      </div>
    </div>
  )
}

function Auth() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <p className="mt-1 text-[#f5f5f5]/80">Email OTP or continue as guest.</p>
        <form className="mt-6 space-y-3">
          <input type="email" placeholder="you@example.com" className="w-full bg-[#0a0a0a] border border-white/15 rounded-xl px-4 py-3" />
          <button type="button" className="cursor-pointer w-full rounded-xl px-5 py-3 font-semibold bg-[#0088ff]">Send OTP</button>
          <input type="text" placeholder="Enter code" className="w-full bg-[#0a0a0a] border border-white/15 rounded-xl px-4 py-3" />
          <button type="button" className="cursor-pointer w-full rounded-xl px-5 py-3 font-semibold bg-[#00ff88]">Verify</button>
          <button type="button" className="cursor-pointer w-full rounded-xl px-5 py-3 font-semibold bg-[#ff0080]">Continue as Guest</button>
        </form>
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] grid place-items-center p-8">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="mt-2 text-[#f5f5f5]/80">That page couldn’t be found.</p>
        <a href="/" className="cursor-pointer inline-flex mt-6 rounded-xl px-5 py-3 font-semibold bg-[#00ff88] text-[#0a0a0a]">Go Home</a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
