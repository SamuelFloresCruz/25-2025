import { Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "❤️ Feliz Navidad Amalia ❤️",
  description: "Una página especial llena de amor para ti en esta Navidad",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>❤️</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${dancing.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
