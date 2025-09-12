import { publications } from '../data/publications';
import PublicationCard from '../components/PublicationCard';

export default function Publications() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Publications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {publications.map((pub, index) => (
          <PublicationCard key={index} publication={pub} />
        ))}
      </div>
    </div>
  );
}