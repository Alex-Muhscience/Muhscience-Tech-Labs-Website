export interface Webinar {
  id: string;
  title: string;
  description: string;
  presenter: {
    name: string;
    title: string;
    avatar: string;
  };
  date: Date;
  duration: number; // in minutes
  maxAttendees: number;
  currentAttendees: number;
  tags: string[];
  thumbnail: string;
  price: number; // 0 for free
  status: 'upcoming' | 'live' | 'completed';
  meetingLink?: string;
  recordingLink?: string;
}

export interface WebinarRegistration {
  id: string;
  webinarId: string;
  attendeeName: string;
  attendeeEmail: string;
  registrationDate: Date;
  attended?: boolean;
}

// Mock webinar data
export const webinars: Webinar[] = [
  {
    id: 'web-1',
    title: 'Introduction to Quantum Computing Applications',
    description: 'Explore the fundamentals of quantum computing and its real-world applications in modern technology. Learn about quantum algorithms, hardware developments, and future implications.',
    presenter: {
      name: 'Dr. Sarah Chen',
      title: 'Quantum Computing Researcher',
      avatar: '/media/presenters/sarah-chen.jpg'
    },
    date: new Date('2024-01-25T18:00:00Z'),
    duration: 90,
    maxAttendees: 100,
    currentAttendees: 45,
    tags: ['Quantum Computing', 'Technology', 'Research'],
    thumbnail: '/media/webinars/quantum-computing.jpg',
    price: 0,
    status: 'upcoming'
  },
  {
    id: 'web-2',
    title: 'AI Ethics and Responsible Development',
    description: 'A comprehensive discussion on ethical considerations in AI development, bias mitigation, and responsible deployment of artificial intelligence systems.',
    presenter: {
      name: 'Prof. Michael Rodriguez',
      title: 'AI Ethics Specialist',
      avatar: '/media/presenters/michael-rodriguez.jpg'
    },
    date: new Date('2024-02-08T19:00:00Z'),
    duration: 75,
    maxAttendees: 150,
    currentAttendees: 67,
    tags: ['AI Ethics', 'Technology', 'Philosophy'],
    thumbnail: '/media/webinars/ai-ethics.jpg',
    price: 25,
    status: 'upcoming'
  },
  {
    id: 'web-3',
    title: 'Sustainable Tech Solutions for Climate Change',
    description: 'Discover innovative technological solutions addressing climate change challenges. From renewable energy to carbon capture technologies.',
    presenter: {
      name: 'Dr. Emma Thompson',
      title: 'Environmental Technology Expert',
      avatar: '/media/presenters/emma-thompson.jpg'
    },
    date: new Date('2024-01-10T17:00:00Z'),
    duration: 60,
    maxAttendees: 80,
    currentAttendees: 80,
    tags: ['Climate Tech', 'Sustainability', 'Innovation'],
    thumbnail: '/media/webinars/climate-tech.jpg',
    price: 0,
    status: 'completed',
    recordingLink: 'https://example.com/recording/climate-tech'
  },
  {
    id: 'web-4',
    title: 'Blockchain Beyond Cryptocurrency',
    description: 'Explore blockchain applications beyond digital currencies, including supply chain management, healthcare records, and smart contracts.',
    presenter: {
      name: 'Alex Johnson',
      title: 'Blockchain Developer',
      avatar: '/media/presenters/alex-johnson.jpg'
    },
    date: new Date('2024-02-15T20:00:00Z'),
    duration: 120,
    maxAttendees: 200,
    currentAttendees: 89,
    tags: ['Blockchain', 'Technology', 'Innovation'],
    thumbnail: '/media/webinars/blockchain.jpg',
    price: 15,
    status: 'upcoming'
  }
];

// Mock registration data
export const registrations: WebinarRegistration[] = [
  {
    id: 'reg-1',
    webinarId: 'web-1',
    attendeeName: 'John Doe',
    attendeeEmail: 'john@example.com',
    registrationDate: new Date('2024-01-15T10:00:00Z')
  },
  {
    id: 'reg-2',
    webinarId: 'web-2',
    attendeeName: 'Jane Smith',
    attendeeEmail: 'jane@example.com',
    registrationDate: new Date('2024-01-18T14:30:00Z')
  }
];
