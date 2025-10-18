import { HomeIcon, BookOpen, Github, Instagram } from "lucide-react";
import Image from "next/image";
import Dock from "./Dock";

const items = [
    { icon: <HomeIcon size={18} />, label: "Home", onClick: () => window.location.reload() },
    { icon: <BookOpen size={18} />, label: "Blog", onClick: () => window.open("/blog", "_self") },
    { icon: <Github size={18} />, label: "GitHub", onClick: () => window.open("https://github.com/Niranjan753", "_blank", "noopener,noreferrer") },
    { icon: (
        <Image
          src="/pocketsflow logo.png"
          alt="Pocketsflow"
          width={18}
          height={18}
          className="object-contain"
        />
      ),
      label: "Pocketsflow",
      onClick: () => window.open("https://pocketsflow.com", "_blank", "noopener,noreferrer")
    },
    { icon: (
        <Image
          src="/traviflow logo.png"
          alt="Traviflow"
          width={18}
          height={18}
          className="object-contain"
        />
      ),
      label: "Traviflow",
      onClick: () => window.open("https://traviflow.com", "_blank", "noopener,noreferrer")
    },
    { icon: <Instagram size={18} />, label: "Instagram", onClick: () => window.open("https://www.instagram.com/berlified/", "_blank", "noopener,noreferrer") },
    // { icon: <ModeToggle />, label: "Theme" }
  ];

export default function Dock2() {
    return (
        <Dock
        items={items}
        panelHeight={56}
        baseItemSize={44}
        magnification={60}
      />
    )
}