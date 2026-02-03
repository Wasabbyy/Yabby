/**
 * Our Journey - Dates and memories
 * Edit this file: add your dates and the filenames of the photos you put in assets/
 */

const JOURNEY_DATA = {
  // Photo shown on the start screen (you + girlfriend)
  // Put the file in assets/start-photo.jpg (or .png)
  startPhoto: 'assets/start-photo.jpg',

  // List your special dates in order (oldest first = top, newest = bottom; snake path)
  dates: [
    {
      id: 'first-date',
      date: 'First date',
      photos: [
        { src: 'assets/memories/strelecak.jpg', text: 'Your caption for this photo.' },
        { src: 'assets/memories/neviny_b.jpeg', text: 'Your caption for this photo.' }
      ]
    },
    { id: 'trip', date: 'Second date', photo: 'assets/memories/trip.jpg', text: 'Best trip together.' },
    { id: 'summer', date: 'Fixa', photo: 'assets/memories/plzen1.JPG', text: 'Summer vibes.' },
    { id: 'spring', date: 'Third date', photo: 'assets/memories/planetarium.JPG', text: 'Spring day.' },
    { id: 'autumn', date: 'Uprising', photo: 'assets/memories/smichov.jpeg', text: 'Autumn walk.' },
    { id: 'winter', date: 'First time in Plzen', photo: 'assets/memories/strelecak.jpg', text: 'Winter memory.' },
    { id: 'bingus', date: 'Andrejovo oslava', photo: 'assets/memories/bingus.JPG', text: 'Valentine\'s.' },
    { id: 'new-year', date: 'Mamky oslava', photo: 'assets/memories/uprising1.HEIC', text: 'New Year together.' },
    { id: 'pregnanci', date: 'Pregnant already?', photo: 'assets/memories/pregnanci.png', text: 'Special news.' },
    { id: 'anniversary', date: 'Planetarium', photo: 'assets/memories/anniversary.jpg', text: 'One year of us.' }
  ]
};
