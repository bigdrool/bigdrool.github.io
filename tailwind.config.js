module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-2': 'float-2 3s ease-in-out infinite',
        'scale-up': 'scaleUp 0.3s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'fadeIn': 'fadeIn 1s ease-in-out',
        'slideIn': 'slideIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' }
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        accent: '#3b82f6'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'xl': '0 20px 40px rgba(0, 0, 0, 0.1)',
        '2xl': '0 40px 80px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: []
}
