// mollyrose-web/src/app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import '../styles/custom.css' // Import your custom CSS
import Header from '../components/Header'; // <--- CORRECT
import Footer from '../components/Footer'; // <--- CORRECT

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="main-content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
