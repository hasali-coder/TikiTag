# TikiTag

TikiTag is a mobile-first event sharing platform that lets users create events, invite guests, collect RSVPs, and unlock a shared photo gallery exclusively for attendees—on the day of the event. Designed to preserve authenticity and connection, only those who RSVP can contribute and view moments from the occasion.

## Features

### Core Functionality

- Event Creation
  - Add title, description, date, location, and optional event banner
- Email Invitations
  - Invite attendees directly via email with real-time RSVP tracking
- RSVP Page
  - Clean RSVP interface with optional guest comment ("Excited to join!")
- D-Day Unlock
  - On the event day, the gallery feature becomes accessible to RSVP'd guests
- Photo Gallery
  - Upload photos
  - View photos shared by other attendees
  - React using preset emoji-style responses (like, funny, wow, celebrate)
  - Optional guest comments on images
- Memory Capsule
  - Automatically generated post-event memory grid for attendees
- Event Reminders
  - Automated email or SMS sent to RSVP'd guests one day before the event

### Host & Privacy Features

- Event host can:
  - Remove inappropriate photos
  - Close photo uploads after a set date
  - Control visibility of the memory capsule
- Guests are notified during RSVP that photo upload/viewing unlocks only on the event date

## Tech Stack

- Frontend: React / Next.js or Vue (recommended)
- Styling: Tailwind CSS
- Backend: Node.js + Express or Supabase (optional)
- Database: PostgreSQL or Firebase Firestore
- Email Service: SendGrid, Resend, or Mailgun
- File Storage: Firebase Storage, Supabase Storage, or AWS S3

## Getting Started

1. Clone the repository:
   git clone https://github.com/hasali-coder/tikitag.git

2. Navigate to the project directory:
   cd tikitag

3. Install dependencies:
   npm install

4. Configure your .env file with keys for:
   - Email service (e.g., SendGrid API)
   - Firebase/Supabase credentials
   - Event base URL and API keys

5. Run the development server:
   npm run dev

## Folder Structure

/src
  /components
  /pages
  /styles
  /services
  /utils
/public
.env.example
README.md

## Roadmap

- Guest profile avatars
- Memory Capsule download feature
- Shareable capsule page with access tokens
- Custom themes per event
- Advanced admin moderation tools

## License

This project is licensed under the MIT License.

## Author

Built by [Muange]. For inquiries or collaboration, feel free to reach out on [your email] or visit [your portfolio link].
