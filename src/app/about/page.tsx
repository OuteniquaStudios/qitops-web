export default function AboutPage() {
    return (
      <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-header font-bold text-primary mb-8">
          About Qitops
        </h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Founded by veteran QA engineers, qitops emerged from a simple observation: 
            traditional quality assurance methods weren&apos;t keeping pace with modern 
            development practices. We set out to reimagine QA as an operational 
            advantage rather than a bottleneck.
          </p>
          <h2 className="text-2xl font-header font-semibold text-primary mt-8">
            Our Mission
          </h2>
          <p>
            To transform quality assurance into a continuous, intelligent process 
            that empowers development teams to ship better software faster.
          </p>
          <p>
            Our name comes from combining &quot;Quality Intelligence&quot; with 
            &quot;Operations&quot; - representing our mission to bring smart, 
            automated quality assurance to every stage of the development 
            lifecycle.
          </p>
          
          <blockquote className="border-l-4 border-primary pl-4 italic">
            &ldquo;Quality is never an accident; it is always the result of 
            intelligent effort.&rdquo; — John Ruskin
          </blockquote>
        </div>
      </main>
    );
}
