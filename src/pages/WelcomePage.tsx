
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FarmHeader from "@/components/FarmHeader";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const WelcomePage = () => {
  const { language, setLanguage, t } = useLanguage();
  const { toast } = useToast();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    toast({
      title: "Language Changed",
      description: `Language has been updated to ${newLanguage}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <FarmHeader showUserMenu={false} />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="flex flex-col items-center">
            <div className="h-32 w-32 rounded-full bg-farm-green-light border-4 border-farm-green flex items-center justify-center mb-6">
              <div className="text-farm-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7c3-2 6-2 9 0s6 2 9 0" />
                  <path d="M3 17c3-2 6-2 9 0s6 2 9 0" />
                  <path d="M3 12c3-2 6-2 9 0s6 2 9 0" />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">{t('welcome')}</h1>
            <p className="text-gray-600 mb-6">
              {t('tagline')}
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Link to="/login">
                <Button className="w-full" variant="default">
                  {t('login')}
                </Button>
              </Link>
              <Link to="/register">
                <Button className="w-full" variant="outline">
                  {t('signup')}
                </Button>
              </Link>
            </div>
            <Link to="/dashboard">
              <Button variant="link" className="w-full text-gray-500">
                {t('continueAsGuest')}
              </Button>
            </Link>
          </div>

          <div className="pt-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Globe size={16} />
                  <span>{language}</span>
                  <ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleLanguageChange('English')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('Español')}>
                  Español
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('Français')}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('हिन्दी')}>
                  हिन्दी (Hindi)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('ਪੰਜਾਬੀ')}>
                  ਪੰਜਾਬੀ (Punjabi)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('मराठी')}>
                  मराठी (Marathi)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('తెలుగు')}>
                  తెలుగు (Telugu)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
