export default function Hero({ 
  headline, 
  subtext, 
  cta 
}: {
  headline: string
  subtext: string
  cta: string
}) {
  return (
    <section className="bg-primary text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{headline}</h1>
        <p className="text-xl md:text-2xl mb-8">{subtext}</p>
        <button className="bg-accent text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition">
          {cta}
        </button>
      </div>
    </section>
  )
}
