
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'nunito': ['Nunito', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#FFD700',
					50: '#FFFEF7',
					100: '#FFFDDB',
					200: '#FFFAAD',
					300: '#FFF67F',
					400: '#FFF251',
					500: '#FFD700',
					600: '#E6C200',
					700: '#B8990C',
					800: '#8A7109',
					900: '#5C4A06',
					foreground: '#2D2A0F'
				},
				secondary: {
					DEFAULT: '#F8F9FA',
					foreground: '#495057'
				},
				warm: {
					50: '#FEFDFB',
					100: '#FDF9F3',
					200: '#FAF0E4',
					300: '#F6E7D5',
					400: '#F2DEC6',
					500: '#EED5B7',
					600: '#E5C49A',
					700: '#D4A574',
					800: '#B5844C',
					900: '#8A6238'
				},
				destructive: {
					DEFAULT: '#EF4444',
					foreground: '#FEFEFE'
				},
				muted: {
					DEFAULT: '#F1F5F9',
					foreground: '#64748B'
				},
				accent: {
					DEFAULT: '#F1F5F9',
					foreground: '#0F172A'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#0F172A'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#0F172A'
				},
				tiki: {
					yellow: '#FFD700',
					cream: '#FFF8E1',
					warm: '#F5F5DC',
					gray: '#8E8E93',
					darkGray: '#48484A'
				}
			},
			borderRadius: {
				lg: '1rem',
				md: '0.75rem',
				sm: '0.5rem'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-4px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'float': 'float 3s ease-in-out infinite'
			},
			boxShadow: {
				'warm': '0 4px 20px rgba(255, 215, 0, 0.15)',
				'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
				'card': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
