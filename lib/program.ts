// Example data structure (you'd likely fetch this from an API)
import Img1 from "@/public/Images/img1.jpg"
import Img2 from "@/public/Images/img2.jpg"
import Img3 from "@/public/Images/img3.jpg"
export const programsData = [
    {
      id: 1,
      title: 'Fundamentals of User interface & Experience',
      imageUrl: Img1, // Replace with your actual image path or URL
      badge: '#Bootcamp',
      badgeColor: 'bg-blue-500', // Example badge color
      description: 'This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach',
      mentors: [
          { id: 'm1', avatarUrl: Img3 }, // Replace with actual avatar paths/URLs
          { id: 'm2', avatarUrl: Img3 },
          { id: 'm3', avatarUrl:  Img3 },
      ],
      hostedBy: null, // Or { name: 'Faith Okolo', avatarUrl: '/images/avatar-faith.jpg' }
      detailsAction: 'View Details',
      primaryAction: 'Analysis',
      primaryActionColor: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      id: 2,
      title: 'Colour Hack Practical Group Call',
      imageUrl: Img2,
      badge: '#Group Call',
      badgeColor: 'bg-green-500',
      description: 'This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach',
      mentors: null,
      hostedBy: { name: 'Faith Okolo', avatarUrl: Img3 },
      detailsAction: 'View Details',
      primaryAction: 'Analysis',
      primaryActionColor: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      id: 3,
      title: 'Colour Hack Practical Group Call',
      imageUrl: Img2,
      badge: '#Group Call',
      badgeColor: 'bg-green-500',
      description: 'This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach',
      mentors: null,
      hostedBy: { name: 'Self', avatarUrl:  Img3 },
      detailsAction: 'View Details',
      primaryAction: 'Assign Mentor',
      primaryActionColor: 'bg-purple-600 hover:bg-purple-700',
    },
    // Add more program objects as needed
  ];