
import { useState } from 'react';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import CreateEventForm from '../components/CreateEventForm';
import FloatingActionButton from '../components/FloatingActionButton';
import EmptyState from '../components/EmptyState';
import { Event } from '../types';

const Index = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateEvent = (eventData: Omit<Event, 'id' | 'createdAt' | 'isActive' | 'galleryUnlocked'>) => {
    const newEvent: Event = {
      ...eventData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      isActive: true,
      galleryUnlocked: false
    };
    
    setEvents(prev => [newEvent, ...prev]);
    setShowCreateForm(false);
  };

  const handleEventClick = (event: Event) => {
    console.log('Event clicked:', event.title);
    // TODO: Navigate to event details page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-tiki-cream to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Events</h2>
          <p className="text-tiki-gray">Create memorable moments and share them with your loved ones</p>
        </div>

        {events.length === 0 ? (
          <EmptyState 
            title="No events yet"
            description="Create your first event and start collecting memories! Tap the + button to get started."
            icon="calendar"
          />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => handleEventClick(event)}
                attendeeCount={Math.floor(Math.random() * 15) + 1} // Mock data
              />
            ))}
          </div>
        )}
      </main>

      <FloatingActionButton onClick={() => setShowCreateForm(true)} />

      {showCreateForm && (
        <CreateEventForm
          onSubmit={handleCreateEvent}
          onCancel={() => setShowCreateForm(false)}
        />
      )}
    </div>
  );
};

export default Index;
