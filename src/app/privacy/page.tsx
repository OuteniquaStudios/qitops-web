export default function PrivacyPage() {
    return (
      <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-header font-bold text-primary mb-8">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-header font-semibold text-primary mt-8 mb-4">
              Data Collection
            </h2>
            <p>
              We collect only the information necessary to provide our services. 
              This includes account information, usage data, and contact information 
              submitted through our forms.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-header font-semibold text-primary mt-8 mb-4">
              Data Usage
            </h2>
            <p>
              Your data is used exclusively to deliver and improve our services. 
              We never sell or share your information with third parties without 
              explicit consent.
            </p>
          </section>
        </div>
      </main>
    )
  }