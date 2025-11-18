import { motion } from 'framer-motion'

const steps = [
  { n: 1, t: 'Create a task', d: 'Add a title, emoji, and rough time estimate.' },
  { n: 2, t: 'AI breaks it down', d: 'Get bite-sized subtasks with realistic times.' },
  { n: 3, t: 'Focus mode', d: 'Start a timer per step. Pause anytime.' },
  { n: 4, t: 'Feel the wins', d: 'Check off steps and watch progress glow.' },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#0a0a0a] text-[#f5f5f5] py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center">How it works</h2>
        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {steps.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <div className="text-[#00ff88] font-bold">{s.n}</div>
              <div className="mt-1 text-xl font-semibold">{s.t}</div>
              <p className="text-[#f5f5f5]/75 mt-1">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
