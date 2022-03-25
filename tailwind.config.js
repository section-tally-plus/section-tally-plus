module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        oxygen: ['Oxygen', 'sans-serif'],
      },
      spacing: {
        px: '1px',
        '2px': '2px',
      },
      zIndex: {
        '-1': '-1',
        excessive: '9999',
      },
      colors: {
        // Discor Colors
        servers: '#202225',
        channels: '#2f3136',
        chat: '#36393f',
        grey: '#99aab5',
        skin: '#f9c9a9',
        high: '#f57731',
        brilliance: '#f9c9a9',
        balance: '#44ddbf',
        bravery: '#9b84ee',
        nitro: '#ff73fa',
        idle: '#faa61a',
        dnd: '#f04747',
        online: '#43B581',
        discord: '#7289da',
      },
    },
  },
  plugins: [],
}
