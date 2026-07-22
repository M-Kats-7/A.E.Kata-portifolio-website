export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        surface: '#121212',
        text: '#111827',
        textMuted: '#4b5563',
        accent: '#0f766e'
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.08)'
      },
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
