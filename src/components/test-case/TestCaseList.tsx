interface TestCase {
  id: string
  title: string
  steps: string
  expected: string
}

export default function TestCaseList({ tests }: { tests: TestCase[] }) {
  return (
    <div className="space-y-4">
      {tests.map((test) => (
        <div key={test.id} className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold text-primary mb-2">{test.title}</h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Steps:</span> {test.steps}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Expected:</span> {test.expected}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
