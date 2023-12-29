import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        linkedinPicture:
          "url('https://media.licdn.com/dms/image/D4E03AQFGF4v-xmdbBg/profile-displayphoto-shrink_800_800/0/1699778705244?e=1709164800&v=beta&t=0txCGgWnpP-kHdAw-Vq1ah1acWIymYGOu5DtrJpm09I')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
