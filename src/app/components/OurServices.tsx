import { ArrowRight, CheckSquare, MapPin, Palette, Users, Utensils, Plane, Music, FileText, Camera, Image as ImageIcon } from 'lucide-react';

// Import service images from Figma
import imgEndeToEndPlanning from "../../assets/752223d8750d3e1c90ba56f2bf434da8555dcf7d.png";
import imgVenueResearch from "../../assets/0592ac80875ab9547dd0ee051dd01f75279c6945.png";
import imgEventStyling from "../../assets/ee06713882ac9a642360d23d9d8bbb5faed0677f.png";
import imgGuestHospitality from "../../assets/c7632bf6c7f00164d7755543ee61ab1684b7bb1d.png";
import imgCatering from "../../assets/04f48726fbe0329daaff996ba0e8fece14e2e799.png";
import imgLogisticsTravel from "../../assets/33be561fe031be99efb67d0a20ea43803b1cb32e.png";
import imgArtistsEntertainment from "../../assets/ac86fffb76c6eb2f1169e7cddf2532ba2004bcb3.png";
import imgInvitesCollaterals from "../../assets/7810a7200ea5278cdaf15708ae5e2bb8f1564ae6.png";
import imgPhotoshootVideography from "../../assets/06db250d606f65853d64f0645b759959dfa835c1.png";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ServiceCard({ image, title, description, icon }: ServiceCardProps) {
  return (
    <div 
      className="rounded-3xl p-6 transition-shadow hover:shadow-lg h-full flex flex-col"
      style={{
        backgroundColor: '#faf7f4',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      }}
    >
      {/* Image Placeholder */}
      <div className="mb-5 overflow-hidden rounded-2xl bg-gray-100" style={{ aspectRatio: '1/1' }}>
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              console.error(`Failed to load image for ${title}:`, image);
              e.currentTarget.style.display = 'none';
              const placeholder = document.createElement('div');
              placeholder.className = 'flex flex-col items-center justify-center gap-3 p-8 text-center';
              placeholder.style.height = '100%';
              placeholder.innerHTML = `
                <div style="color: #b55268; opacity: 0.3;">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <p style="font-family: 'Montserrat', sans-serif; font-size: 12px; color: #38322f; opacity: 0.5;">
                  Image failed to load<br />${title}
                </p>
              `;
              e.currentTarget.parentElement?.appendChild(placeholder);
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 p-8 text-center h-full">
            <ImageIcon size={48} strokeWidth={1.5} style={{ color: '#b55268', opacity: 0.3 }} />
            <p 
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '12px',
                color: '#38322f',
                opacity: 0.5
              }}
            >
              Add image for<br />{title}
            </p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 
          className="mb-3"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            color: '#b55268',
            fontSize: '24px',
            lineHeight: '1.3'
          }}
        >
          {title}
        </h3>

        <p 
          className="mb-4"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            color: '#38322f',
            fontSize: '14px',
            lineHeight: '1.6'
          }}
        >
          {description}
        </p>

        {/* Icon */}
        <div className="mt-auto flex justify-end" style={{ color: '#b55268' }}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export default function OurServices() {
  return (
    <section 
      id="services"
      className="py-24 px-6 md:px-12"
      style={{ backgroundColor: '#fffaf4' }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 
          className="mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            color: '#b55268',
            fontSize: '48px',
            lineHeight: '1.2'
          }}
        >
          Our Services
        </h2>
        <p 
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            color: '#38322f',
            fontSize: '18px',
            lineHeight: '1.6'
          }}
        >
          Crafting celebrations with style, structure, and soul.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <ServiceCard
            image={imgEndeToEndPlanning}
            title="End-to-End Planning"
            description="From first idea to final farewell, seamlessly managed."
            icon={<CheckSquare size={28} strokeWidth={1.5} />}
          />
          <ServiceCard
            image={imgVenueResearch}
            title="Venue Research & Co-ordination"
            description="Finding the perfect setting that fits your vision."
            icon={<MapPin size={28} strokeWidth={1.5} />}
          />
          <ServiceCard
            image={imgEventStyling}
            title="Event Styling & Décor"
            description="Thoughtfully designed functions that reflect your celebration."
            icon={<Palette size={28} strokeWidth={1.5} />}
          />
          <ServiceCard
            image={imgGuestHospitality}
            title="Guest Experience & Hospitality"
            description="Warm, attentive experiences for every guest."
            icon={<Users size={28} strokeWidth={1.5} />}
          />
          <ServiceCard
            image={imgCatering}
            title="Catering"
            description="Delicacies that delight every palate."
            icon={<Utensils size={28} strokeWidth={1.5} />}
          />
          <ServiceCard
            image={imgLogisticsTravel}
            title="Logistics & Travel Management"
            description="Smooth coordination of movement, stays, and schedules."
            icon={<Plane size={28} strokeWidth={1.5} />}
          />
          <ServiceCard
            image={imgArtistsEntertainment}
            title="Artists & Entertainment"
            description="Performances that elevate the mood and moment."
            icon={<Music size={28} strokeWidth={1.5} />}
          />
          <ServiceCard
            image={imgInvitesCollaterals}
            title="Invites & Event Collaterals"
            description="Providing cohesive invites and on-ground collaterals."
            icon={<FileText size={28} strokeWidth={1.5} />}
          />
          <ServiceCard
            image={imgPhotoshootVideography}
            title="Photoshoot & Videography"
            description="Capturing memories with emotion, detail, and clarity."
            icon={<Camera size={28} strokeWidth={1.5} />}
          />
        </div>
      </div>

      {/* Wave Shape at Bottom */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '120px' }}>
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C240,100 480,100 720,60 C960,20 1200,20 1440,60 L1440,120 L0,120 Z" 
            fill="#f19bb2"
            opacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
}