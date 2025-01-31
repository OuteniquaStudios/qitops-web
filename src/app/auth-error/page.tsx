export default function AuthErrorPage() {
  return (
    <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-header font-bold text-primary mb-8">
        Authentication Error
      </h1>
      <p className="text-red-600">
        Failed to authenticate with GitHub. Please try again.
      </p>
    </main>
  )
} 