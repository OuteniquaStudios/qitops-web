export default function TermsPage() {
    return (
      <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-header font-bold text-primary mb-8">
          Terms of Service
        </h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-header font-semibold text-primary mt-8 mb-4">
              Acceptance of Terms
            </h2>
            <p>
              By accessing or using our services, you agree to be bound by these 
              terms. Please read them carefully before using qitops.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-header font-semibold text-primary mt-8 mb-4">
              Service Usage
            </h2>
            <p>
              You agree to use qitops only for lawful purposes and in accordance 
              with all applicable laws and regulations.
            </p>
          </section>
        </div>
      </main>
    )
  }