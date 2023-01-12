/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'jakarta': ['Plus Jakarta Sans', 'system-ui'],
      'playfair': ['Playfair Display', 'system-ui'],
      'poppins': ['Poppins', 'system-ui'],
      'inter': ['Inter', 'system-ui'],
    },
    extend: {
      backgroundImage: {
        'bg-hero': "url('/public/dist/image/bg-hero.svg')",
        'bg-patters': "url('/public/dist/image/Patterns.svg')"
      }
    },
  },
  plugins: [],
}
