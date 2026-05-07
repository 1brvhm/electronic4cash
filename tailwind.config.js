/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float':        'float 5s ease-in-out infinite',
        'float-rev':    'float-rev 6.5s ease-in-out infinite',
        'float-slow':   'float 8s ease-in-out infinite',
        'ticker-fwd':   'ticker-fwd 42s linear infinite',
        'ticker-bwd':   'ticker-bwd 42s linear infinite',
        'glow-pulse':   'glow-pulse 2.4s ease-in-out infinite',
        'ping-sm':      'ping 1.8s cubic-bezier(0,0,.2,1) infinite',
        'text-shimmer': 'text-shimmer 4s linear infinite',
        'border-glow':  'border-glow 3s ease infinite',
        'chevron':      'chevron 1.5s ease-in-out infinite',
        // New
        'slide-in-l':   'slideInL .9s cubic-bezier(.16,1,.3,1) both',
        'slide-in-r':   'slideInR .9s cubic-bezier(.16,1,.3,1) both',
        'scale-up':     'scaleUp .65s cubic-bezier(.16,1,.3,1) both',
        'particle':     'particleRise 6s ease-in infinite',
        'orb-drift':    'orbDrift 14s ease-in-out infinite',
        'orb-drift-2':  'orbDrift2 18s ease-in-out infinite',
        'pulse-ring':   'pulseRing 2.2s ease-out infinite',
        'spin-slow':    'spin 20s linear infinite',
        'bounce-icon':  'bounceIcon .55s cubic-bezier(.36,.07,.19,.97) both',
        'fade-in':      'fadeIn .6s ease both',
        'line-draw':    'lineDraw 1.2s cubic-bezier(.16,1,.3,1) both',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)'  },
          '50%':     { transform: 'translateY(-18px)' },
        },
        'float-rev': {
          '0%,100%': { transform: 'translateY(-9px)' },
          '50%':     { transform: 'translateY(9px)'  },
        },
        'ticker-fwd': {
          '0%':   { transform: 'translateX(0)'    },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ticker-bwd': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)'    },
        },
        'glow-pulse': {
          '0%,100%': { boxShadow: '0 0 22px rgba(124,58,237,.4), 0 0 44px rgba(59,130,246,.15)' },
          '50%':     { boxShadow: '0 0 38px rgba(124,58,237,.65),0 0 72px rgba(59,130,246,.28)' },
        },
        'text-shimmer': {
          '0%,100%': { backgroundPosition: '0% 50%'   },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        'border-glow': {
          '0%,100%': { borderColor: 'rgba(124,58,237,.4)'  },
          '50%':     { borderColor: 'rgba(59,130,246,.7)'  },
        },
        'chevron': {
          '0%,100%': { opacity: '0.35', transform: 'translateX(0)' },
          '50%':     { opacity: '1',    transform: 'translateX(5px)' },
        },
        // New keyframes
        slideInL: {
          from: { opacity: '0', transform: 'translateX(-70px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        slideInR: {
          from: { opacity: '0', transform: 'translateX(70px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        scaleUp: {
          from: { opacity: '0', transform: 'scale(0.84) translateY(16px)' },
          to:   { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        particleRise: {
          '0%':   { opacity: '0', transform: 'translateY(0) scale(0.6)' },
          '12%':  { opacity: '1' },
          '88%':  { opacity: '0.5' },
          '100%': { opacity: '0', transform: 'translateY(-260px) scale(0.2)' },
        },
        orbDrift: {
          '0%,100%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%':     { transform: 'translate(35px, -45px) scale(1.06)' },
          '50%':     { transform: 'translate(-25px, -20px) scale(0.94)' },
          '75%':     { transform: 'translate(15px, 32px) scale(1.03)' },
        },
        orbDrift2: {
          '0%,100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%':     { transform: 'translate(-40px, 30px) scale(1.08)' },
          '66%':     { transform: 'translate(30px, -25px) scale(0.92)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(1)',    opacity: '0.55' },
          '100%': { transform: 'scale(1.75)', opacity: '0'    },
        },
        bounceIcon: {
          '0%,100%': { transform: 'translateY(0) scale(1)' },
          '35%':     { transform: 'translateY(-7px) scale(1.08)' },
          '65%':     { transform: 'translateY(-3px) scale(1.04)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        lineDraw: {
          from: { strokeDashoffset: '1000', opacity: '0' },
          to:   { strokeDashoffset: '0',    opacity: '1' },
        },
      },
      backgroundSize: { '200%': '200%', '300%': '300%' },
    },
  },
  plugins: [],
};
