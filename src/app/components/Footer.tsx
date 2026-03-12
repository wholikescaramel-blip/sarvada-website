import { Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#fffaf4] border-t border-[#e8dcd6] mt-16">
      <div className="max-w-[1400px] mx-auto px-6 py-10 text-center">

        {/* Brand Name */}
        <h3
          className="text-xl mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#b55268"
          }}
        >
          Sarvada Events
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6 text-[#b55268]">
          <a
            href="https://wa.me/916290383337"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <MessageCircle size={22} />
          </a>
          
          <a
            href="https://instagram.com/sarvada.events_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Instagram size={22} />
          </a>

          <a
            href="https://facebook.com/profile.php?id=61582059745730"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Facebook size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p
          className="text-sm"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: "#38322f"
          }}
        >
          © 2026 Sarvada Events.
        </p>
      </div>
    </footer>
  );
}