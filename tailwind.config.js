/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'christ': "url('../public/img/christ.jpg')",
        'art1' :"url('../public/img/art1.jpg')",
        'art2' :"url('../public/img/art2.jpg')",
        'art3' :"url('../public/img/art3.jpg')",
        'art4' :"url('../public/img/art4.jpg')",
        'art6': "url('../public/img/art6.jpg')",
        'art5' :"url('../public/img/art5.jpg')",
        'mary' : "url('../public/img/mary.jpg')",
        "sunlight" : "https://unsplash.com/photos/QbDCsB2yCSM",
        
        // 'cord': "https://demos.codezeel.com/wordpress/WCM05/WCM050120/wp-content/uploads/2023/04/sub-banner-1.jpg",
        // 'matte': "https://demos.codezeel.com/wordpress/WCM05/WCM050120/wp-content/uploads/2023/04/sub-banner-3.jpg"
      },
    },
  },
  plugins: [],
}

