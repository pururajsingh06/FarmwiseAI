
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Cloud, 
  Wheat, 
  Microscope, 
  CalendarDays, 
  Users, 
  Settings,
  UserRound
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  translateKey: string;
  href: string;
  active: boolean;
}

const SidebarItem = ({ icon: Icon, label, translateKey, href, active }: SidebarItemProps) => {
  const { t } = useLanguage();
  
  return (
    <Link 
      to={href}
      className={cn(
        'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
        active 
          ? 'bg-farm-green text-white' 
          : 'hover:bg-farm-green-light hover:text-farm-green-dark'
      )}
    >
      <Icon size={20} />
      <span className="font-medium">{t(translateKey)}</span>
    </Link>
  );
};

const FarmSidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'DASHBOARD', translateKey: 'dashboard', href: '/dashboard' },
    { icon: Cloud, label: 'WEATHER', translateKey: 'weather', href: '/weather' },
    { icon: Wheat, label: 'CROP RECOMMENDATIONS', translateKey: 'cropRecommendations', href: '/crops' },
    { icon: Microscope, label: 'SOIL HEALTH', translateKey: 'soilHealth', href: '/soil' },
    { icon: CalendarDays, label: 'FARMING CALENDAR', translateKey: 'farmingCalendar', href: '/calendar' },
    { icon: Users, label: 'COMMUNITY', translateKey: 'community', href: '/community' },
    { icon: Settings, label: 'SETTINGS', translateKey: 'settings', href: '/settings' },
    { icon: UserRound, label: 'PROFILE', translateKey: 'profile', href: '/profile' },
  ];

  return (
    <div className="w-60 h-full border-r bg-sidebar">
      {menuItems.map((item) => (
        <SidebarItem 
          key={item.href}
          icon={item.icon}
          label={item.label}
          translateKey={item.translateKey}
          href={item.href}
          active={pathname === item.href}
        />
      ))}
    </div>
  );
};

export default FarmSidebar;
