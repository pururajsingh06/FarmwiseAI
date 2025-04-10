
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

// Define available languages
export type Language = 'English' | 'Español' | 'Français' | 'हिन्दी' | 'ਪੰਜਾਬੀ' | 'मराठी' | 'తెలుగు';

// Type for translations
export type Translations = {
  [key: string]: string;
};

// Define context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'English',
  setLanguage: () => {},
  t: (key) => key,
});

// Translation data
const translations: Record<Language, Translations> = {
  'English': {
    'login': 'LOGIN',
    'signup': 'SIGN UP',
    'continueAsGuest': 'Continue as guest to explore',
    'welcome': 'SMART FARM ADVISOR',
    'tagline': 'Data-driven farming recommendations for better yields',
    'currentWeather': 'CURRENT WEATHER',
    'alerts': 'ALERTS:',
    'dashboard': 'DASHBOARD',
    'weather': 'WEATHER',
    'cropRecommendations': 'CROP RECOMMENDATIONS',
    'soilHealth': 'SOIL HEALTH',
    'farmingCalendar': 'FARMING CALENDAR',
    'community': 'COMMUNITY',
    'settings': 'SETTINGS',
  },
  'Español': {
    'login': 'INICIAR SESIÓN',
    'signup': 'REGISTRARSE',
    'continueAsGuest': 'Continuar como invitado para explorar',
    'welcome': 'ASESOR INTELIGENTE DE AGRICULTURA',
    'tagline': 'Recomendaciones agrícolas basadas en datos para mejores rendimientos',
    'currentWeather': 'CLIMA ACTUAL',
    'alerts': 'ALERTAS:',
    'dashboard': 'PANEL',
    'weather': 'CLIMA',
    'cropRecommendations': 'RECOMENDACIONES DE CULTIVOS',
    'soilHealth': 'SALUD DEL SUELO',
    'farmingCalendar': 'CALENDARIO AGRÍCOLA',
    'community': 'COMUNIDAD',
    'settings': 'AJUSTES',
  },
  'Français': {
    'login': 'CONNEXION',
    'signup': 'S\'INSCRIRE',
    'continueAsGuest': 'Continuer en tant qu\'invité pour explorer',
    'welcome': 'CONSEILLER AGRICOLE INTELLIGENT',
    'tagline': 'Recommandations agricoles basées sur les données pour de meilleurs rendements',
    'currentWeather': 'MÉTÉO ACTUELLE',
    'alerts': 'ALERTES:',
    'dashboard': 'TABLEAU DE BORD',
    'weather': 'MÉTÉO',
    'cropRecommendations': 'RECOMMANDATIONS DE CULTURES',
    'soilHealth': 'SANTÉ DU SOL',
    'farmingCalendar': 'CALENDRIER AGRICOLE',
    'community': 'COMMUNAUTÉ',
    'settings': 'PARAMÈTRES',
  },
  'हिन्दी': {
    'login': 'लॉग इन',
    'signup': 'साइन अप',
    'continueAsGuest': 'अतिथि के रूप में जारी रखें',
    'welcome': 'स्मार्ट कृषि सलाहकार',
    'tagline': 'बेहतर उपज के लिए डेटा-आधारित कृषि सिफारिशें',
    'currentWeather': 'वर्तमान मौसम',
    'alerts': 'सूचनाएं:',
    'dashboard': 'डैशबोर्ड',
    'weather': 'मौसम',
    'cropRecommendations': 'फसल अनुशंसाएँ',
    'soilHealth': 'मिट्टी का स्वास्थ्य',
    'farmingCalendar': 'कृषि कैलेंडर',
    'community': 'समुदाय',
    'settings': 'सेटिंग्स',
  },
  'ਪੰਜਾਬੀ': {
    'login': 'ਲੌਗਿਨ',
    'signup': 'ਸਾਈਨ ਅੱਪ',
    'continueAsGuest': 'ਮਹਿਮਾਨ ਵਜੋਂ ਜਾਰੀ ਰੱਖੋ',
    'welcome': 'ਸਮਾਰਟ ਖੇਤੀ ਸਲਾਹਕਾਰ',
    'tagline': 'ਬਿਹਤਰ ਉਪਜ ਲਈ ਡਾਟਾ-ਅਧਾਰਿਤ ਖੇਤੀ ਸਿਫਾਰਸ਼ਾਂ',
    'currentWeather': 'ਮੌਜੂਦਾ ਮੌਸਮ',
    'alerts': 'ਸੂਚਨਾਵਾਂ:',
    'dashboard': 'ਡੈਸ਼ਬੋਰਡ',
    'weather': 'ਮੌਸਮ',
    'cropRecommendations': 'ਫਸਲ ਸਿਫਾਰਸ਼ਾਂ',
    'soilHealth': 'ਮਿੱਟੀ ਦਾ ਸਿਹਤ',
    'farmingCalendar': 'ਖੇਤੀ ਕੈਲੰਡਰ',
    'community': 'ਭਾਈਚਾਰਾ',
    'settings': 'ਸੈਟਿੰਗਾਂ',
  },
  'मराठी': {
    'login': 'लॉगिन',
    'signup': 'साइन अप',
    'continueAsGuest': 'पाहुणे म्हणून पुढे जा',
    'welcome': 'स्मार्ट शेती सल्लागार',
    'tagline': 'चांगल्या उत्पादनासाठी डेटा-आधारित शेती शिफारसी',
    'currentWeather': 'सध्याचे हवामान',
    'alerts': 'सूचना:',
    'dashboard': 'डॅशबोर्ड',
    'weather': 'हवामान',
    'cropRecommendations': 'पीक शिफारसी',
    'soilHealth': 'माती आरोग्य',
    'farmingCalendar': 'शेती दिनदर्शिका',
    'community': 'समुदाय',
    'settings': 'सेटिंग्ज',
  },
  'తెలుగు': {
    'login': 'లాగిన్',
    'signup': 'సైన్ అప్',
    'continueAsGuest': 'అతిథిగా కొనసాగండి',
    'welcome': 'స్మార్ట్ వ్యవసాయ సలహాదారు',
    'tagline': 'మెరుగైన దిగుబడి కోసం డేటా ఆధారిత వ్యవసాయ సిఫార్సులు',
    'currentWeather': 'ప్రస్తుత వాతావరణం',
    'alerts': 'హెచ్చరికలు:',
    'dashboard': 'డాష్‌బోర్డ్',
    'weather': 'వాతావరణం',
    'cropRecommendations': 'పంట సిఫార్సులు',
    'soilHealth': 'నేల ఆరోగ్యం',
    'farmingCalendar': 'వ్యవసాయ క్యాలెండర్',
    'community': 'సముదాయం',
    'settings': 'సెట్టింగ్‌లు',
  },
};

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('English');

  // Load language from localStorage on component mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && Object.keys(translations).includes(storedLanguage)) {
      setLanguage(storedLanguage as Language);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
