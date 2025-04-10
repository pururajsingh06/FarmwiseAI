
import FarmHeader from "./FarmHeader";
import FarmSidebar from "./FarmSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FarmLayoutProps {
  children: React.ReactNode;
}

const FarmLayout = ({ children }: FarmLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col h-screen">
      <FarmHeader />
      <div className="flex flex-1 overflow-hidden">
        {isMobile ? (
          <div className="flex flex-col w-full">
            <div className="p-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Menu size={18} />
                    <span className="ml-2">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0">
                  <div className="pt-2">
                    <FarmSidebar />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
          </div>
        ) : (
          <>
            <FarmSidebar />
            <div className="flex-1 overflow-y-auto p-6">{children}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default FarmLayout;
