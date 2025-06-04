
import { Camera, Calendar, Users } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: 'camera' | 'calendar' | 'users';
}

const EmptyState = ({ title, description, icon = 'calendar' }: EmptyStateProps) => {
  const IconComponent = {
    camera: Camera,
    calendar: Calendar,
    users: Users
  }[icon];

  return (
    <div className="text-center py-12 px-6">
      <div className="bg-tiki-cream p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <IconComponent className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-tiki-gray max-w-md mx-auto">{description}</p>
    </div>
  );
};

export default EmptyState;
