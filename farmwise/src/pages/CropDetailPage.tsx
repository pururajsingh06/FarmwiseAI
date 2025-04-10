
import { useParams, Link } from "react-router-dom";
import FarmLayout from "@/components/FarmLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Wheat, CornIcon } from "@/components/CropIcons";

const CropDetailPage = () => {
  const { cropId } = useParams<{ cropId: string }>();
  const { toast } = useToast();
  
  // This would come from an API in a real app based on the cropId
  const cropData = {
    name: cropId?.toUpperCase() || "CORN",
    match: 92,
    icon: cropId === "soybeans" ? "soybeans" : cropId === "wheat" ? "wheat" : "corn",
    reasons: [
      "Thrives in your loamy soil",
      "Optimal temperature range for your area",
      "Good rainfall match for growing season"
    ],
    plantingWindow: {
      start: "Apr 15",
      end: "May 10"
    },
    status: "OPTIMAL TIME TO PLANT",
    yield: "175-200 bushels per acre",
    considerations: [
      "Consider drought-resistant varieties",
      "Frost risk minimal after April 20"
    ]
  };

  const handleAddCrop = () => {
    toast({
      title: "Crop Added",
      description: `${cropData.name} has been added to your crops.`,
    });
  };

  const renderCropIcon = () => {
    if (cropData.icon === "soybeans") {
      return (
        <div className="w-32 h-32 bg-farm-green-light rounded-full flex items-center justify-center">
          <SoybeansIcon />
        </div>
      );
    } else if (cropData.icon === "wheat") {
      return (
        <div className="w-32 h-32 bg-farm-green-light rounded-full flex items-center justify-center">
          <Wheat size={64} className="text-farm-green" />
        </div>
      );
    } else {
      return (
        <div className="w-32 h-32 bg-farm-green-light rounded-full flex items-center justify-center">
          <CornIcon />
        </div>
      );
    }
  };

  return (
    <FarmLayout>
      <div className="mb-6">
        <Link to="/crops">
          <Button variant="ghost" size="sm" className="flex items-center">
            <ArrowLeft size={16} className="mr-1" />
            Back to list
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
        {renderCropIcon()}
        <div>
          <h1 className="text-2xl font-bold mb-1">Crop Details: {cropData.name}</h1>
          <div className="text-lg font-semibold mb-4 text-farm-green">
            {cropData.match}% MATCH FOR YOUR FARM
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg border">
          <h2 className="text-lg font-semibold mb-3">WHY THIS CROP:</h2>
          <ul className="space-y-2">
            {cropData.reasons.map((reason, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight size={16} className="mr-2 text-farm-green" />
                {reason}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <h2 className="text-lg font-semibold mb-3">PLANTING WINDOW:</h2>
          <p className="mb-2">
            <span className="font-medium">Optimal:</span> {cropData.plantingWindow.start} - {cropData.plantingWindow.end}
          </p>
          <p className="font-medium bg-farm-green-light text-farm-green-dark p-2 rounded text-center">
            Current status: {cropData.status}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg border">
          <h2 className="text-lg font-semibold mb-3">EXPECTED YIELD:</h2>
          <p className="text-xl font-medium">{cropData.yield}</p>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <h2 className="text-lg font-semibold mb-3">LOCAL CONSIDERATIONS:</h2>
          <ul className="space-y-2">
            {cropData.considerations.map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight size={16} className="mr-2 text-farm-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between">
        <Link to="/crops">
          <Button variant="outline">BACK TO LIST</Button>
        </Link>
        <Button onClick={handleAddCrop}>
          <Plus size={16} className="mr-2" />
          ADD TO MY CROPS
        </Button>
      </div>
    </FarmLayout>
  );
};

const SoybeansIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-farm-green">
    <path d="M12 7c.5-1.5 1.5-3 4-3 2 0 3 1 3 3s-.5 3-2 4c-1.5 1-4 1-6 0-2-1-3-3-3-6 0-2 1-3 3-3 2.5 0 3.5 1.5 4 3" />
    <path d="M3 15c1-1 2-2 3-1.5 1.5 .4 1 3 .5 4.5-1.5 5 6 7 11.5-1.5" />
    <path d="M17 19c.9-2.3 1.2-5 .5-7" />
  </svg>
);

export default CropDetailPage;
