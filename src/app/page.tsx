import Hero from '@/components/Hero'
import HighlightCard from '@/components/HighlightCard'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero
        headline="The Future of QA: Embedded, Intelligent, Continuous."
        subtext="qitops transforms quality assurance into an operational force embedded within your development workflow. Faster. Smarter. Seamless."
        cta="Learn More"
      />
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-header font-bold text-center mb-12 text-primary">
          What Makes qitops Revolutionary?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <HighlightCard 
            title="QA as Code"
            content="Store and manage quality artifacts—test cases, risk assessments, and metrics—right alongside your application code."
          />
          <HighlightCard
            title="AI-Powered Risk Assessment"
            content="Leverage AI to identify high-risk areas and prioritize testing intelligently, so you focus on what truly matters."
          />
          <HighlightCard
            title="Confidence Scoring"
            content="Quantify the reliability of every test run, eliminating the guesswork and improving trust in automation."
          />
          <HighlightCard
            title="Seamless Developer Integration"
            content="From pull requests to CI/CD, qitops embeds quality into your existing workflows without adding friction."
          />
        </div>
      </section>
    </main>
  );
}
