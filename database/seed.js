const db = require('./index.js');
const Locations = require('./Locations.js');

const sampleLocations = [
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Oakland, CA',
    rating: 3,
    pictures: ['exterior1','interior1','interior2'],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Oakland, CA',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Oakland, CA',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Oakland, CA',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Oakland, CA',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Hollywood, CA',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Hollywood, CA',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Hollywood, CA',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Hollywood, CA',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Hollywood, CA',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Austin, TX',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Austin, TX',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Austin, TX',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Austin, TX',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Austin, TX',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Seattle, WA',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Seattle, WA',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Seattle, WA',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Seattle, WA',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
  {
    title: 'A Nice Place To Be',
    host: 'Normal Person',
    location: 'Seattle, WA',
    rating: 3,
    pictures: [1,2,3],
    guests: 4,
    bedrooms: 2,
    price: 200,
    description: 'There are a lot of nice places out there, and this is one of them',
    amenities: ['heat', 'AC']
    
  },
];

const insertSampleLocations = function() {
    Locations.create(sampleLocations)
      .then(() => db.close());
};

insertSampleLocations();