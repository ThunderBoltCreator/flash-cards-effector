/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
   ],
   corePlugins: {
      preflight: true
   },
   darkMode: ['class'],
   plugins: [require('tailwindcss-animate')],
   prefix: '',
   theme: {
      container: {
         center: true,
         padding: '2rem',
         screens: {
            '2xl': '1400px',
         },
      },
      fontFamily: {
         sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
         xs: '0.75rem',
         s: '0.875rem',
         m: '1rem',
         l: '1.125rem',
         xl: '1.25rem',
         xxl: '1.625rem',
      },
      fontWeight: {
         regular: 400,
         bold: 700,
      },
      lineHeight: {
         s: '16px',
         m: '24px',
         l: '36px'
      },
      extend: {
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
         },
         borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
         },
         colors: {
            accent: {
               "100": 'hsl(256, 100%, 83%)',
               "300": 'hsl(256, 100%, 75%)',
               "500": 'hsl(256, 100%, 69%)',
               "700": 'hsl(256, 55%, 55%)',
               "900": 'hsl(256, 45%, 28%)',
            },
            success: {
               '100': 'hsl(150, 100%, 75%)',
               '300': 'hsl(150, 79%, 52%)',
               '500': 'hsl(150, 82%, 44%)',
               '700': 'hsl(150, 82%, 33%)',
               '900': 'hsl(150, 82%, 22%)',
            },
            danger: {
               '100': 'hsl(348, 100%, 75%)',
               '300': 'hsl(348, 87%, 59%)',
               '500': 'hsl(348, 82%, 44%)',
               '700': 'hsl(348, 82%, 33%)',
               '900': 'hsl(348, 82%, 22%)',
            },
            warning: {
               '100': 'hsl(40, 100%, 73%)',
               '300': 'hsl(40, 77%, 56%)',
               '500': 'hsl(40, 100%, 43%)',
               '700': 'hsl(40, 100%, 30%)',
               '900': 'hsl(40, 100%, 20%)',
            },
            info: {
               '100': 'hsl(219, 100%, 73%)',
               '300': 'hsl(218, 100%, 65%)',
               '500': 'hsl(218, 91%, 59%)',
               '700': 'hsl(218, 63%, 49%)',
               '900': 'hsl(218, 63%, 37%)',
            },
            light: {
               '100': 'hsl(0, 0%, 100%)',
               '300': 'hsl(255, 100%, 98%)',
               '500': 'hsl(255, 44%, 96%)',
               '700': 'hsl(260, 9%, 87%)',
               '900': 'hsl(260, 5%, 77%)',
            },
            dark: {
               '100': 'hsl(0, 0%, 50%)',
               '300': 'hsl(0, 0%, 30%)',
               '500': 'hsl(0, 0%, 20%)',
               '700': 'hsl(0, 0%, 9%)',
               '900': 'hsl(0, 0%, 0%)',
            },
            background: 'hsl(var(--background))',
            border: 'hsl(var(--border))',
            card: {
               DEFAULT: 'hsl(var(--card))',
               foreground: 'hsl(var(--card-foreground))',
            },
            destructive: {
               DEFAULT: 'hsl(var(--destructive))',
               foreground: 'hsl(var(--destructive-foreground))',
            },
            foreground: 'hsl(var(--foreground))',
            input: 'hsl(var(--input))',
            muted: {
               DEFAULT: 'hsl(var(--muted))',
               foreground: 'hsl(var(--muted-foreground))',
            },
            popover: {
               DEFAULT: 'hsl(var(--popover))',
               foreground: 'hsl(var(--popover-foreground))',
            },
            ring: 'hsl(var(--ring))',
         },
         keyframes: {
            'accordion-down': {
               from: {height: '0'},
               to: {height: 'var(--radix-accordion-content-height)'},
            },
            'accordion-up': {
               from: {height: 'var(--radix-accordion-content-height)'},
               to: {height: '0'},
            },
         },

      },
   },
}
