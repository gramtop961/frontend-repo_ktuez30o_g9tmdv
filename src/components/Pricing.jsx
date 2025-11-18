import { motion } from 'framer-motion'

const tiers = [
  { name: 'Free', price: '$0', color: '#0088ff', perks: [
    'Basic task creation',
    'Limited AI breakdowns',
    'Timer mode',
    'Progress tracking',
  ] },
  { name: 'Pro', price: '$9.99', color: '#ff0080', perks: [
    'Unlimited AI breakdowns',
    'AI braindump organizer',
    'Auto-prioritize & insights',
    'Voice notifications',
  ] },
]

export default function Pricing() {
  return (
    <section className="bg-[#0a0a0a] text-[#f5f5f5] py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center">Pricing</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <div className="text-2xl font-bold" style={{ color: t.color }}>{t.name}</div>
              <div className="mt-2 text-4xl font-extrabold">{t.price}<span className="text-lg text-[#f5f5f5]/70">/mo</span></div>
              <ul className="mt-4 space-y-2 text-[#f5f5f5]/85">
                {t.perks.map((p) => (<li key={p}>• {p}</li>))}
              </ul>
              <a href="/auth" className="cursor-pointer inline-flex mt-6 rounded-xl px-5 py-3 font-semibold bg-[#00ff88] text-[#0a0a0a] shadow-[0_0_16px_#00ff88]/40 hover:scale-[1.02] transition">Get started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
