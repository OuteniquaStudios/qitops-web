export default function HowItWorksPage() {
  return (
    <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
      <section className="mb-16">
        <h1 className="text-4xl font-header font-bold text-primary mb-8">
          How qitops Embeds QA Into Development
        </h1>
        
        <div className="space-y-12">
          <div className="bg-secondary p-6 rounded-lg">
            <h2 className="text-2xl font-header font-semibold mb-4 text-primary">
              Developer Collaboration
            </h2>
            <p className="text-gray-700">
              Teams collaborate on test cases directly within pull requests, fostering shared 
              responsibility for quality. Our system integrates with GitHub/GitLab to provide:
            </p>
            <ul className="mt-4 space-y-2 pl-4 text-gray-700">
              <li>• In-line test case reviews</li>
              <li>• Automated quality checklists</li>
              <li>• Real-time feedback loops</li>
            </ul>
          </div>

          <div className="bg-secondary p-6 rounded-lg">
            <h2 className="text-2xl font-header font-semibold mb-4 text-primary">
              Real-Time Reporting
            </h2>
            <p className="text-gray-700">
              Instant insights on risk, coverage, and confidence are delivered directly to developers 
              through:
            </p>
            <ul className="mt-4 space-y-2 pl-4 text-gray-700">
              <li>• PR comment summaries</li>
              <li>• CI/CD pipeline integrations</li>
              <li>• Interactive dashboards</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
