import HomePage from './pages/HomePage.jsx'

// Навигация между разделами выполняется через якорные ссылки (#id),
// react-router-dom намеренно не используется — сайт одностраничный.
export default function App() {
  return <HomePage />
}
