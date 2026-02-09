/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './*.html',
    './pages/**/*.html',
    './components/**/*.html',
    './assets/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C5A059',
          light: '#D4AF37',
          dark: '#B8860B',
          muted: '#E2C285'
        },
        background: {
          dark: '#0B0E14',
          darker: '#0A0E17',
          DEFAULT: '#121212',
          navy: '#0B1221'
        },
        surface: {
          dark: '#161B26',
          DEFAULT: '#151B23',
          light: '#1E1E1E',
          charcoal: '#1A1A1A',
          navy: '#141C2F'
        },
        border: {
          light: 'rgba(197, 160, 89, 0.3)',
          subtle: 'rgba(255, 255, 255, 0.1)',
          DEFAULT: 'rgba(255, 255, 255, 0.05)'
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Cinzel', 'serif'],
        sans: ['Inter', 'Montserrat', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      fontSize: {
        '2xs': '9px',
        'xs': '10px',
        'sm': '11px'
      },
      letterSpacing: {
        'widest': '0.3em',
        'wider': '0.2em'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}
