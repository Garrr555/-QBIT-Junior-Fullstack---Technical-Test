import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div
      className="flex flex-col min-h-screen w-full"
      style={{ background: "var(--light)", margin: "0px", padding: "0px" }}
    >
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
