import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Check } from 'lucide-react';
import rsvp_image from '../../assets/images/herobg3.jpg'

const FeaturedEventsRSVP = ({ events = [] }) => {
  // State to track RSVPs
  const [rsvpStatus, setRsvpStatus] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfGuests: 1
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle RSVP form submission
  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    
    // Update RSVP status for this event
    setRsvpStatus(prev => ({
      ...prev,
      [selectedEvent.id]: true
    }));
    
    // Show confirmation
    setShowConfirmation(true);
    
    // Reset form and hide after delay
    setTimeout(() => {
      setShowConfirmation(false);
      setSelectedEvent(null);
      setFormData({
        name: '',
        email: '',
        phone: '',
        numberOfGuests: 1
      });
    }, 3000);
  };

  // Sample featured events (replace with your actual events)
  const featuredEvents = events.length > 0 ? events.filter(event => 
    new Date(event.date) > new Date()
  ).slice(0, 3) : [
    {
      id: 'fe1',
      title: 'Annual Innovation Summit',
      date: '2025-05-20',
      time: '10:00 AM',
      location: 'Main Campus Auditorium',
      capacity: 250,
      imageUrl: rsvp_image,
      description: 'Join us for a day of innovation, technology, and networking.'
    },
    {
      id: 'fe2',
      title: 'Spring Career Fair',
      date: '2025-06-15',
      time: '09:00 AM',
      location: 'Student Center',
      capacity: 500,
      imageUrl: '/api/placeholder/400/200',
      description: 'Connect with top employers and explore career opportunities.'
    },
    {
      id: 'fe3',
      title: 'Research Symposium',
      date: '2025-07-10',
      time: '01:00 PM',
      location: 'Science Complex',
      capacity: 150,
      imageUrl: '/api/placeholder/400/200',
      description: 'Showcasing groundbreaking research from our faculty and students.'
    }
  ];

  return (
    <div className="py-12 bg-green-100 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-2">Featured Events</h2>
        <p className="text-center text-gray-600 mb-12">Secure your spot at our most anticipated upcoming events</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={event.imageUrl || '/api/placeholder/400/200'} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
                {rsvpStatus[event.id] && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-bl-lg">
                    <Check className="inline-block mr-1" size={16} />
                    RSVP Confirmed
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                
                <div className="flex items-center mb-2 text-gray-600">
                  <Calendar className="mr-2" size={16} />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                
                <div className="flex items-center mb-2 text-gray-600">
                  <Clock className="mr-2" size={16} />
                  <span>{event.time}</span>
                </div>
                
                <div className="flex items-center mb-4 text-gray-600">
                  <MapPin className="mr-2" size={16} />
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Users className="mr-2" size={16} />
                    <span>Capacity: {event.capacity}</span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedEvent(event)}
                    disabled={rsvpStatus[event.id]}
                    className={`px-4 py-2 rounded-md ${
                      rsvpStatus[event.id] 
                        ? 'bg-green-200 text-green-800 cursor-not-allowed' 
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {rsvpStatus[event.id] ? 'RSVP Confirmed' : 'RSVP Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RSVP Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full m-4 relative">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedEvent(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">RSVP for {selectedEvent.title}</h3>
            
            {showConfirmation ? (
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-green-600" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h4>
                <p className="text-gray-600">Your RSVP has been confirmed. We look forward to seeing you there!</p>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfGuests">
                    Number of Guests
                  </label>
                  <select
                    id="numberOfGuests"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-colors text-lg font-medium"
                  >
                    Confirm RSVP
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedEventsRSVP;