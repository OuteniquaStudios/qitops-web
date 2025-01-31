export default function HighlightCard({ title, content }: { 
  title: string
  content: string 
}) {
  return (
    <div className="bg-secondary p-6 rounded-lg hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-header font-semibold mb-4 text-primary">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}
