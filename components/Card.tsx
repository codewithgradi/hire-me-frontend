import { Phone, Mail, GraduationCap, Github, QrCode } from "lucide-react";

export default function Card() {
  const data = {
    id: 'kdjh8239e30e923eklkwel',
    firstName: "Gradi",
    surname: "Puata",
    email: "gradipuata@gmail.com",
    githubUrl: "codewithgradi",
    linkedInUrl: "gradi-puata",
    institution: "Richfield Institute of Technology",
    personalWebsite: "gradipuata.vercel.app",
    phoneNumber: "0680488872",
    qualificationType: "Bachelor Degree",
    qualificationName: "Information Technology"
  };

  const navyBg = "bg-[#0a2540]";

  return (
    <div className="flex flex-col items-center gap-10 p-5 bg-gray-100 min-h-screen font-sans">
      
      {/* FRONT OF CARD */}
      <section className={`${navyBg} w-[500px] h-[280px] flex flex-col items-center justify-center text-white shadow-2xl rounded-sm p-8 text-center`}>
        <div className="border-2 border-white/30 w-16 h-16 flex items-center justify-center mb-4">
          <span className="text-[10px] tracking-widest">LOGO</span>
        </div>
        <h1 className="text-3xl font-bold tracking-[0.2em] uppercase mb-1">Hire Me</h1>
        <p className="text-[10px] tracking-[0.15em] opacity-80 uppercase">
          Revolutionizing Physical Networking with Technology
        </p>
      </section>

      {/* BACK OF CARD */}
      <section className="bg-white w-[500px] h-[280px] shadow-2xl rounded-sm p-10 flex flex-col relative text-[#0a2540]">
        {/* Name and Designation */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold tracking-tight uppercase">
            {data.firstName} {data.surname}
          </h1>
          <p className="text-xs tracking-widest opacity-70 uppercase mt-1">
            {data.qualificationName} Specialist
          </p>
        </div>

        {/* The thin horizontal line from the image */}
        <div className="w-full h-[1.5px] bg-[#0a2540] mb-6"></div>

        <div className="flex justify-between items-end grow">
          {/* Contact Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone size={14} />
              <p className="text-[11px] font-medium">{data.phoneNumber}</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={14} />
              <p className="text-[11px] font-medium">{data.email}</p>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap size={14} />
              <div>
                <p className="text-[11px] font-medium leading-none">{data.qualificationType} {data.qualificationName}</p>
                <p className="text-[9px] opacity-70 mt-1">{data.institution}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Github size={14} />
              <p className="text-[11px] font-medium">{data.githubUrl}</p>
            </div>
          </div>

          {/* QR Code Placeholder */}
          <div className="flex flex-col items-center">
            <div className="p-2 border border-gray-200 rounded-sm">
               <QrCode size={65} strokeWidth={1.5} />
            </div>
            <span className="text-[8px] mt-1 font-bold tracking-tighter">SCAN ME</span>
          </div>
        </div>
      </section>
      
    </div>
  );
}