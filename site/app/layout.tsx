
import Navbar from './components/navbar'; 
import Footer from './components/footer';
import './globals.css';
import { ThemeProvider } from 'next-themes';



export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    );
  }
  