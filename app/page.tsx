import ChatBox from "./components/ChatBox";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-between py-10 px-6 font-sans">
        {/* Header */}
          <Header />

        {/* Hero Section */}
          <Hero />
    
        {/* Chat Box */}
          <ChatBox />
    
        {/* Footer */}
          <Footer />
        </div>
  );
}
