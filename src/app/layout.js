import { Mont } from "@/fonts/fonts";
import "@/styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from "@/context/authContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={ Mont.className }>
    <AuthProvider>
      <Header />
      <main className="main">
        { children }
      </main>
      <Footer />
      <div id="modal-root" />
    </AuthProvider>
    </body>
    </html>
  );
}
