
import React, { useState } from 'react';
import { Calendar, MapPin, Image as ImageIcon, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Event } from '../types';

interface CreateEventFormProps {
  onSubmit: (event: Omit<Event, 'id' | 'createdAt' | 'isActive' | 'galleryUnlocked'>) => void;
  onCancel: () => void;
}

const CreateEventForm = ({ onSubmit, onCancel }: CreateEventFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    hostEmail: '',
    bannerImage: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.date && formData.location && formData.hostEmail) {
      onSubmit(formData);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, bannerImage: imageUrl }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="tiki-gradient p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold text-primary-foreground">Create New Event</h2>
          <p className="text-primary-foreground/80 mt-1">Let's make some memories!</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {formData.bannerImage && (
            <div className="relative">
              <img 
                src={formData.bannerImage} 
                alt="Event banner" 
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, bannerImage: '' }))}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
              >
                ×
              </button>
            </div>
          )}
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Event Banner (Optional)
            </label>
            <div className="flex items-center space-x-2">
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="banner-upload"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('banner-upload')?.click()}
                className="flex items-center space-x-2"
              >
                <ImageIcon className="h-4 w-4" />
                <span>Upload Banner</span>
              </Button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Event Title *
            </label>
            <Input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Birthday Party, Wedding, etc."
              className="w-full"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Tell your guests what to expect..."
              className="w-full h-24 resize-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Date & Time *
            </label>
            <Input
              type="datetime-local"
              value={formData.date}
              onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              className="w-full"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              Location *
            </label>
            <Input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              placeholder="Where is this happening?"
              className="w-full"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Users className="inline h-4 w-4 mr-1" />
              Your Email *
            </label>
            <Input
              type="email"
              value={formData.hostEmail}
              onChange={(e) => setFormData(prev => ({ ...prev, hostEmail: e.target.value }))}
              placeholder="host@example.com"
              className="w-full"
              required
            />
          </div>
          
          <div className="flex space-x-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 btn-primary"
            >
              Create Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEventForm;
