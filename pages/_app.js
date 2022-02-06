// page/_app.js
import 'tailwindcss/tailwind.css'
import { GlobalStyles } from 'twin.macro'
import { AppProvider } from '../components/AppContext'

const App = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  </div>
)

export default App
