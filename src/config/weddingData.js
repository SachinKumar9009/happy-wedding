// src/config/weddingData.js

export const weddingData = {
  // Couple Details
  couple: {
    groom: {
      name: "Happy",
      fullName: "Happy Pradhan",
      photo: "/images/groom.jpg",
    },
    bride: {
      name: "Supriya",
      fullName: "Supriya Pradhan",
      photo: "/images/bride.jpg",
    },
    formalDisplay: "Happy Pradhan weds Supriya Pradhan",
  },

  // Main Wedding
  wedding: {
    date: "2027-02-13",          // YYYY-MM-DD format (important for countdown)
    displayDate: "13 February 2027",
    time: "4:00 PM",
    day: "Saturday",
  },

  // Language
  language: "en-odia",            // English primary + some Odia

  // Events (easy to add / remove / edit)
  events: [
    {
      id: "haldi",
      name: "Haldi Ceremony",
      nameOdia: "ହଳଦୀ ଉତ୍ସବ",
      date: "11 February 2027",
      time: "10:00 AM",
      venue: "Pradhan Residence, Bhubaneswar",
      address: "Pradhan Residence, Near XYZ Road, Bhubaneswar, Odisha",
      description: "Traditional turmeric ceremony filled with laughter, music and blessings from family and friends.",
      mapLink: "https://maps.google.com", // replace later
    },
    {
      id: "mehendi",
      name: "Mehendi Ceremony",
      nameOdia: "ମେହେନ୍ଦୀ",
      date: "11 February 2027",
      time: "4:00 PM",
      venue: "Pradhan Residence, Bhubaneswar",
      address: "Pradhan Residence, Near XYZ Road, Bhubaneswar, Odisha",
      description: "Beautiful mehendi application, songs and joyful celebrations with loved ones.",
      mapLink: "https://maps.google.com",
    },
    {
      id: "sangeet",
      name: "Sangeet Night",
      nameOdia: "ସଙ୍ଗୀତ ସନ୍ଧ୍ୟା",
      date: "12 February 2027",
      time: "7:00 PM",
      venue: "Hotel Crown Palace",
      address: "Plot No. 12, Near Airport Road, Bhubaneswar, Odisha 751003",
      description: "An evening of music, dance and celebration with family and friends.",
      mapLink: "https://maps.google.com",
    },
    {
      id: "wedding",
      name: "Wedding Ceremony",
      nameOdia: "ବିବାହ",
      date: "13 February 2027",
      time: "4:00 PM",
      venue: "Hotel Crown Palace",
      address: "Plot No. 12, Near Airport Road, Bhubaneswar, Odisha 751003",
      description: "The sacred wedding rituals where two souls unite forever.",
      mapLink: "https://maps.google.com",
    },
    {
      id: "reception",
      name: "Reception",
      nameOdia: "ରିସେପସନ୍",
      date: "13 February 2027",
      time: "8:00 PM",
      venue: "Hotel Crown Palace",
      address: "Plot No. 12, Near Airport Road, Bhubaneswar, Odisha 751003",
      description: "Grand reception dinner and celebrations with all our beloved guests.",
      mapLink: "https://maps.google.com",
    },
  ],

  // Primary Venue
  venue: {
    name: "Hotel Crown Palace",
    address: "Plot No. 12, Near Airport Road, Bhubaneswar, Odisha 751003",
    mapLink: "https://maps.google.com", // replace with real Google Maps link later
    notes: "Parking available. Traditional / formal attire preferred.",
    image: "/images/venue.jpg",
  },

  // Gallery
  
  gallery: [
    {
      id: 1,
      category: "Couple",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900",
      alt: "Wedding couple",
    },
    {
      id: 2,
      category: "Bride",
      image: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?w=900",
      alt: "Indian bride wedding portrait",
    },
    {
      id: 3,
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
      alt: "Wedding celebration",
    },
    {
      id: 4,
      category: "Couple",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900",
      alt: "Wedding couple photography",
    },
    {
      id: 5,
      category: "Celebration",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=900",
      alt: "Wedding celebration decorations",
    },
    {
      id: 6,
      category: "Bride",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900",
      alt: "Bride portrait",
    },
    {
      id: 7,
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900",
      alt: "Wedding ceremony",
    },
    {
      id: 8,
      category: "Celebration",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900",
      alt: "Wedding celebration",
    },
  ],


  // Family
  family: {
    groomParents: "Shri Ramesh Pradhan & Smt. Sunita Pradhan",
    brideParents: "Shri Suresh Pradhan & Smt. Anita Pradhan",
    message: "With the blessings of our parents and elders, we invite you to share in our joy as we begin this beautiful journey together.",
    messageOdia: "ଆମ ପିତାମାତା ଓ ବଡ଼ମାନଙ୍କ ଆଶୀର୍ବାଦରେ ଆମେ ଆପଣଙ୍କୁ ଏହି ଶୁଭ ଅବସରରେ ସାମିଲ ହେବାକୁ ନିମନ୍ତ୍ରଣ କରୁଛୁ।",
  },

  // Site Meta
  meta: {
    title: "Happy & Priya Wedding | 13 February 2027",
    description: "You are cordially invited to the wedding of Happy Pradhan and Priya Pradhan on 13 February 2027.",
  },

  // Music (we will add the actual file later)
  music: {
    enabled: true,
    src: "/music/wedding-bg.mp3",
  },
};