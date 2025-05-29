import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";


export const metadata = {
  title: "E-Commerce Belanja | By Adib",
  description: "Project E-Commerce By Adib Muhammad Maros",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" suppressHydrationWarning>
      <head/>
      <body>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >

          {children}
      </ThemeProvider>
      </body>
      </html>
  );
}
