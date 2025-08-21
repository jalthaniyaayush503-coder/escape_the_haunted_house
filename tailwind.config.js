module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#2D1B69", // deep-purple-800
          50: "#F3F0FF", // purple-50
          100: "#E5DEFF", // purple-100
          200: "#D1C4E9", // purple-200
          300: "#B39DDB", // purple-300
          400: "#9575CD", // purple-400
          500: "#7E57C2", // purple-500
          600: "#673AB7", // purple-600
          700: "#512DA8", // purple-700
          800: "#2D1B69", // deep-purple-800
          900: "#1A0E42", // deep-purple-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#1A1A2E", // slate-800
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1A1A2E", // slate-800
          900: "#0F172A", // slate-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#FFD700", // yellow-400
          50: "#FEFCE8", // yellow-50
          100: "#FEF3C7", // yellow-100
          200: "#FDE68A", // yellow-200
          300: "#FCD34D", // yellow-300
          400: "#FFD700", // yellow-400
          500: "#F59E0B", // yellow-500
          600: "#D97706", // yellow-600
          700: "#B45309", // yellow-700
          800: "#92400E", // yellow-800
          900: "#78350F", // yellow-900
        },
        // Background Colors
        background: {
          DEFAULT: "#0F0F23", // gray-900
          50: "#F9FAFB", // gray-50
          100: "#F3F4F6", // gray-100
          200: "#E5E7EB", // gray-200
          300: "#D1D5DB", // gray-300
          400: "#9CA3AF", // gray-400
          500: "#6B7280", // gray-500
          600: "#4B5563", // gray-600
          700: "#374151", // gray-700
          800: "#1F2937", // gray-800
          900: "#0F0F23", // gray-900
        },
        // Surface Colors
        surface: {
          DEFAULT: "#16213E", // blue-gray-800
          50: "#F8FAFC", // blue-gray-50
          100: "#F1F5F9", // blue-gray-100
          200: "#E2E8F0", // blue-gray-200
          300: "#CBD5E1", // blue-gray-300
          400: "#94A3B8", // blue-gray-400
          500: "#64748B", // blue-gray-500
          600: "#475569", // blue-gray-600
          700: "#334155", // blue-gray-700
          800: "#16213E", // blue-gray-800
          900: "#0F172A", // blue-gray-900
        },
        // Text Colors
        "text-primary": "#E8E8E8", // gray-200
        "text-secondary": "#B0B0B0", // gray-400
        // Status Colors
        success: {
          DEFAULT: "#00FF88", // green-400
          50: "#ECFDF5", // green-50
          100: "#D1FAE5", // green-100
          200: "#A7F3D0", // green-200
          300: "#6EE7B7", // green-300
          400: "#00FF88", // green-400
          500: "#10B981", // green-500
          600: "#059669", // green-600
          700: "#047857", // green-700
          800: "#065F46", // green-800
          900: "#064E3B", // green-900
        },
        warning: {
          DEFAULT: "#FF6B35", // orange-500
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          200: "#FED7AA", // orange-200
          300: "#FDBA74", // orange-300
          400: "#FB923C", // orange-400
          500: "#FF6B35", // orange-500
          600: "#EA580C", // orange-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800
          900: "#7C2D12", // orange-900
        },
        error: {
          DEFAULT: "#FF1744", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#FF1744", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Orbitron', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
        black: '900',
      },
      animation: {
        'collectible-pulse': 'collectible-pulse 2s ease-in-out infinite',
        'damage-flash': 'damage-flash 100ms ease-out',
        'glow-pulse': 'glow-pulse 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        'collectible-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'damage-flash': {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.7' },
          '100%': { opacity: '1' },
        },
        'glow-pulse': {
          '0%': { boxShadow: '0 0 5px currentColor' },
          '100%': { boxShadow: '0 0 20px currentColor' },
        },
      },
      boxShadow: {
        'atmospheric': '0 0 20px rgba(45, 27, 105, 0.3)',
        'ui-elevation': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'glow-sm': '0 0 8px currentColor',
        'glow-md': '0 0 16px currentColor',
        'glow-lg': '0 0 24px currentColor',
        'inner-light': 'inset 0 1px 2px rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '150': '150ms',
        '250': '250ms',
      },
      transitionTimingFunction: {
        'game': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}