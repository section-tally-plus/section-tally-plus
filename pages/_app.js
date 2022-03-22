// page/_app.js
import 'tailwindcss/tailwind.css'
import { GlobalStyles } from 'twin.macro'
import { AppProvider } from '../components/AppContext'
import { UserProvider } from '@auth0/nextjs-auth0'

const App = ({ Component, pageProps }) => (
  <UserProvider>
    <GlobalStyles />
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  </UserProvider>
)

export default App
