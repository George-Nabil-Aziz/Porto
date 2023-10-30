/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        openSans: 'Open Sans',
        poppins: 'Poppins'
      },
      backgroundImage: {
        'home-image': 'url("/SliderHeader/background.png")',
        'images-view1': 'url("/ImagesView/images-view1.jpg")',
        'images-view2': 'url("/ImagesView/images-view2.jpg")'
      }
    }
  },
  plugins: []
}
