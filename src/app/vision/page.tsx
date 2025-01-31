export default function VisionPage() {
  return (
    <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
      <section className="mb-16">
        <h1 className="text-4xl font-header font-bold text-primary mb-8">
          Why QA Is Still Broken
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          For years, we&apos;ve been told that Agile, DevOps, and CI/CD solved QA&apos;s challenges. 
          Yet testing is still slow, reactive, and disconnected from the software development 
          process. Automated tests execute faster, but they aren&apos;t smarter. Developers still 
          don&apos;t trust results, and quality remains an afterthought.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-header font-bold text-primary mb-8">
          A New Way to Engineer Quality
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          qitops doesn&apos;t just automate testing—it redefines how software quality is managed. 
          By embedding QA directly into development workflows, qitops transforms it into 
          an operational force that drives better software faster.
        </p>
        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="text-xl font-header font-semibold mb-4 text-primary">
            Integration Workflow
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>→ Developer Opens Pull Request</li>
            <li>→ Risk Assessment Performed</li>
            <li>→ Context-Aware Tests Generated</li>
            <li>→ Confidence Scored</li>
            <li>→ Quality Approved</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
