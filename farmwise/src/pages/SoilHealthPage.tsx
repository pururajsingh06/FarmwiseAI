
import FarmLayout from "@/components/FarmLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Microscope, Droplet, AlertTriangle } from "lucide-react";

const SoilHealthPage = () => {
  const soilData = {
    type: "Loamy",
    pH: 6.8,
    organicMatter: "4.2%",
    nitrogen: "Medium",
    phosphorus: "High",
    potassium: "Medium",
    lastTestedDate: "2025-02-15"
  };

  return (
    <FarmLayout>
      <h1 className="text-2xl font-bold mb-6">Soil Health Analysis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">CURRENT SOIL STATUS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <Microscope size={48} className="mr-4 text-farm-earth-dark" />
              <div>
                <div className="text-xl font-semibold">{soilData.type} Soil</div>
                <div className="text-muted-foreground">pH Level: {soilData.pH}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="border rounded-md p-3">
                <p className="text-sm text-muted-foreground">Organic Matter</p>
                <p className="font-medium">{soilData.organicMatter}</p>
              </div>
              <div className="border rounded-md p-3">
                <p className="text-sm text-muted-foreground">Nitrogen (N)</p>
                <p className="font-medium">{soilData.nitrogen}</p>
              </div>
              <div className="border rounded-md p-3">
                <p className="text-sm text-muted-foreground">Phosphorus (P)</p>
                <p className="font-medium">{soilData.phosphorus}</p>
              </div>
              <div className="border rounded-md p-3">
                <p className="text-sm text-muted-foreground">Potassium (K)</p>
                <p className="font-medium">{soilData.potassium}</p>
              </div>
            </div>
            
            <div className="mt-4 text-xs text-muted-foreground">
              Last tested: {soilData.lastTestedDate}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">MOISTURE LEVELS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <Droplet size={48} className="mr-4 text-farm-sky" />
              <div>
                <div className="text-xl font-semibold">Adequate</div>
                <div className="text-muted-foreground">68% moisture content</div>
              </div>
            </div>
            
            <div className="h-8 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-farm-sky rounded-full" style={{ width: "68%" }}></div>
            </div>
            
            <div className="flex justify-between mt-2 text-sm">
              <span>Dry</span>
              <span>Optimal</span>
              <span>Saturated</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">RECOMMENDATIONS:</h2>
        <div className="space-y-2">
          <div className="alert-item">
            <AlertTriangle size={18} className="text-farm-alert" />
            <p>Consider adding compost to improve organic matter content</p>
          </div>
          <div className="alert-item">
            <AlertTriangle size={18} className="text-farm-alert" />
            <p>Maintain current irrigation schedule for optimal moisture</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">SOIL AMENDMENT PLAN:</h2>
        <div className="bg-white p-4 rounded-lg border">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left pb-2">Amendment</th>
                <th className="text-left pb-2">Purpose</th>
                <th className="text-left pb-2">Application Rate</th>
                <th className="text-left pb-2">When to Apply</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Lime</td>
                <td className="py-2">Adjust pH</td>
                <td className="py-2">50 lbs/acre</td>
                <td className="py-2">Fall</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Compost</td>
                <td className="py-2">Organic Matter</td>
                <td className="py-2">2-3 tons/acre</td>
                <td className="py-2">Spring</td>
              </tr>
              <tr>
                <td className="py-2">Cover Crop</td>
                <td className="py-2">Soil Structure</td>
                <td className="py-2">Varies</td>
                <td className="py-2">After Harvest</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center">
        <Button size="lg">REQUEST SOIL TEST KIT</Button>
      </div>
    </FarmLayout>
  );
};

export default SoilHealthPage;
