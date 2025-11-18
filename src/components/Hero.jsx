import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-[#f5f5f5]">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/60 to-[#0a0a0a] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-[0_0_30px_rgba(0,255,136,0.35)]"
          style={{ textShadow: '0 0 20px rgba(0,255,136,0.35)' }}
        >
          StepWize
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg md:text-2xl text-[#f5f5f5]/90"
        >
          Beat procrastination with ADHD-friendly task flows powered by AI.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#features" className="cursor-pointer inline-flex items-center rounded-xl px-6 py-3 text-[#0a0a0a] font-semibold bg-[#00ff88] shadow-[0_0_20px_#00ff88]/40 hover:scale-[1.02] transition">Explore Features</a>
          <a href="/dashboard" className="cursor-pointer inline-flex items-center rounded-xl px-6 py-3 text-[#f5f5f5] font-semibold bg-[#0088ff]/80 hover:bg-[#0088ff] shadow-[0_0_20px_#0088ff]/40 transition">Open Dashboard</a>
        </motion.div>
        <div className="mt-10 text-sm text-[#f5f5f5]/70">Dark theme • Neon accents • Smooth animations</div>
      </div>
    </section>
  )
}
