
import FarmLayout from "@/components/FarmLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wheat, ArrowRight } from "lucide-react";

const CropCard = ({ name, match, icon: Icon }: { name: string; match: number; icon: React.ElementType }) => {
  return (
    <div className="crop-card">
      <div className="crop-image">
        <Icon size={48} className="text-farm-green" />
      </div>
      <div className="crop-details">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <div className="mb-3">
          <span className="match-badge">
            {match}% match
          </span>
        </div>
        <div className="mt-auto">
          <Link to={`/crops/${name.toLowerCase()}`}>
            <Button variant="outline" size="sm" className="w-full flex justify-between">
              View Details
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CropsPage = () => {
  // This would come from an API in a real app
  const recommendedCrops = [
    { name: "CORN", match: 92, icon: CornIcon },
    { name: "SOYBEANS", match: 87, icon: SoybeansIcon },
    { name: "WHEAT", match: 82, icon: WheatIcon },
  ];

  return (
    <FarmLayout>
      <h1 className="text-2xl font-bold mb-4">Crop Recommendations</h1>
      <p className="mb-6 text-muted-foreground">
        Based on your soil type, location, and current weather patterns:
      </p>

      <h2 className="text-lg font-semibold mb-4">TOP RECOMMENDED CROPS:</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {recommendedCrops.map((crop) => (
          <CropCard
            key={crop.name}
            name={crop.name}
            match={crop.match}
            icon={crop.icon}
          />
        ))}
      </div>

      <div className="bg-white p-4 rounded-lg border mb-8">
        <h2 className="text-lg font-semibold mb-3">PLANTING CONSIDERATIONS:</h2>
        <ul className="space-y-2 list-disc pl-5">
          <li>Plant corn within the next 2 weeks</li>
          <li>Current soil moisture levels optimal</li>
          <li>Consider nitrogen supplements</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <Button size="lg">GENERATE DETAILED PLANTING SCHEDULE</Button>
      </div>
    </FarmLayout>
  );
};

// Simple crop icons for demonstration
const CornIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6v16" />
    <path d="M6 12c1.5 0 3 .5 3 2-2 0-3 .5-3 2 1.5 0 3 .5 3 2-2 0-3 .5-3 2" />
    <path d="M18 12c-1.5 0-3 .5-3 2 2 0 3 .5 3 2-1.5 0-3 .5-3 2 2 0 3 .5 3 2" />
    <path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  </svg>
);

const SoybeansIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 7c.5-1.5 1.5-3 4-3 2 0 3 1 3 3s-.5 3-2 4c-1.5 1-4 1-6 0-2-1-3-3-3-6 0-2 1-3 3-3 2.5 0 3.5 1.5 4 3" />
    <path d="M3 15c1-1 2-2 3-1.5 1.5 .4 1 3 .5 4.5-1.5 5 6 7 11.5-1.5" />
    <path d="M17 19c.9-2.3 1.2-5 .5-7" />
  </svg>
);

const WheatIcon = Wheat;

export default CropsPage;
