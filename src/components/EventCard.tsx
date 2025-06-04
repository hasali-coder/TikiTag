
import { Calendar, MapPin, Users } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onClick: () => void;
  attendeeCount?: number;
}

const EventCard = ({ event, onClick, attendeeCount = 0 }: EventCardProps) => {
  const eventDate = new Date(event.date);
  const isToday = new Date().toDateString() === eventDate.toDateString();
  const isPast = eventDate < new Date();

  return (
    <div 
      className="card-tiki cursor-pointer transform hover:scale-105 transition-all duration-200"
      onClick={onClick}
    >
      {event.bannerImage && (
        <div className="mb-4 -mx-6 -mt-6">
          <img 
            src={event.bannerImage} 
            alt={event.title}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
        </div>
      )}
      
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{event.title}</h3>
          {isToday && (
            <span className="pill-badge bg-primary text-primary-foreground animate-float">
              Today!
            </span>
          )}
        </div>
        
        <p className="text-tiki-gray line-clamp-2">{event.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-tiki-darkGray">
            <Calendar className="h-4 w-4 mr-2" />
            {eventDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          
          <div className="flex items-center text-sm text-tiki-darkGray">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
          </div>
          
          <div className="flex items-center text-sm text-tiki-darkGray">
            <Users className="h-4 w-4 mr-2" />
            {attendeeCount} attending
          </div>
        </div>
        
        {event.galleryUnlocked && (
          <div className="pt-2 border-t border-warm-200">
            <span className="pill-badge bg-green-100 text-green-800">
              Photo Gallery Unlocked 📸
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
