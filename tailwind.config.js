/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html" , "./assets/pages/contact-us.html" , "./assets/pages/blog.html" , "./assets/pages/error.html" , "./assets/pages/login-regester.html" , "./assets/pages/wishlist.html" , "./assets/pages/cart.html" , "./assets/pages/shop.html"],
  theme: {
    fontFamily:{
      'Helvetica' : ['Helvetica'],
    },
    extend: {
      colors: {
        "primary": "#ff782c",
        "secondary": "#6839cc",
        "highlight": "#e56d6d",
        "color" : '#666',
        "lighter" : '#999',
        "svg-primary" : "#f2eaea"
      },
      borderColor: {
        "primary": "#e5e5e5",
        "secondary" : "#ff782c",
      },
      backgroundColor:{
        "org": "#ff782c",
        "purpel": "#6839cc",
        "primary": "#f2eaea",
        "secondry" : "#ff782c" ,
        "inp" : '#f5f5f5',
        "color" : '#666',
        "before" : '#fad7b7',
      },
      outlineColor:{
        "purpel": "#6839cc",
      },
      height:{
        '66' : '277px',
        "350" : "350px",
        "400" : "400px",
        '570' : '570px',
        '578' : '578px',
        '700' : '700px',
      },
      width:{
        "450" : "450px",
        "500" : "500px",
        "660" : "660px",
        "700" : "700px",
        "750" : "750px",
        "950" : "950px",
      },
      zIndex:{
        '1' : '1'
      },
      animation: {
        sliderItem1: 'sliderItem1 8s ease-in-out infinite',
        sliderItem2: 'sliderItem2 8s ease-in-out infinite',
        sliderItem3: 'sliderItem3 8s ease-in-out infinite',
        sliderItem4: 'sliderItem4 8s ease-in-out infinite',
      },
      keyframes:{
        sliderItem1:{
          '0%, 100%': { transform: 'translateX(-30px)'},
          '50%': { transform: 'translateX(0px)' , transform: 'rotate(3deg)'},
        }, 
        sliderItem2:{
          '0%, 100%': { transform: 'rotateY(-55deg)'},
          '50%': { transform: 'rotateY(60deg)' ,},
        },
        sliderItem3:{
          '0%, 100%': { transform: 'translateY(30px)'},
          '50%': { transform: 'translateY(0px)' ,},
        },
        sliderItem4:{
          '0%, 100%': { transform: 'translateX(30px)'},
          '50%': { transform: 'translateX(0px)' ,},
        },
      }
    },
  },
  plugins: [],
};
