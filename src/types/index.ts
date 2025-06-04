
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  bannerImage?: string;
  hostEmail: string;
  createdAt: string;
  isActive: boolean;
  galleryUnlocked: boolean;
}

export interface Guest {
  id: string;
  email: string;
  name?: string;
  eventId: string;
  rsvpStatus: 'pending' | 'attending' | 'declined';
  rsvpMessage?: string;
  rsvpDate?: string;
}

export interface Photo {
  id: string;
  eventId: string;
  guestId: string;
  imageUrl: string;
  caption?: string;
  uploadedAt: string;
  reactions: PhotoReaction[];
  comments: PhotoComment[];
}

export interface PhotoReaction {
  id: string;
  photoId: string;
  guestId: string;
  emoji: string;
  createdAt: string;
}

export interface PhotoComment {
  id: string;
  photoId: string;
  guestId: string;
  comment: string;
  createdAt: string;
}
