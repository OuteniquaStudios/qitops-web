export default function SecurityPage() {
  return (
    <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-header font-bold text-primary mb-8">
        Security Practices
      </h1>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-header font-semibold text-primary mt-8 mb-4">
            Data Protection
          </h2>
          <p>
            We employ industry-standard security measures including encryption 
            at rest and in transit, regular security audits, and strict access 
            controls.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-header font-semibold text-primary mt-8 mb-4">
            Compliance
          </h2>
          <p>
            qitops adheres to major compliance frameworks including GDPR, POPIA and 
            CCPA. We regularly update our practices to meet evolving security 
            standards.
          </p>
        </section>
      </div>
    </main>
  )
}
