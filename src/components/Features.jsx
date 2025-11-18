import { motion } from 'framer-motion'
import { CheckCircle2, Timer, Sparkles, Wand2 } from 'lucide-react'

const items = [
  { icon: Sparkles, title: 'AI Breakdown', desc: 'Turn big goals into bite-sized subtasks with one click.', color: '#00ff88' },
  { icon: Timer, title: 'Focus Timers', desc: 'Start, pause, and stop timers per subtask to stay on track.', color: '#0088ff' },
  { icon: CheckCircle2, title: 'Satisfying Progress', desc: 'Check off steps and watch progress glow to 100%.', color: '#ff0080' },
  { icon: Wand2, title: 'AI Editing', desc: 'Tweak tasks with natural prompts. Undo and redo anytime.', color: '#00ff88' },
]

export default function Features() {
  return (
    <section id="features" className="bg-[#0a0a0a] text-[#f5f5f5] py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center">Everything to keep you moving</h2>
        <p className="text-center mt-3 text-[#f5f5f5]/80">Built for neurodiverse focus with gentle structure and momentum.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <it.icon color={it.color} className="w-6 h-6" />
                <h3 className="text-xl font-semibold">{it.title}</h3>
              </div>
              <p className="mt-2 text-[#f5f5f5]/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
