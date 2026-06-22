import type { IconType } from "react-icons";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaCertificate,
  FaAward,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa";

export type SectionMeta = {
  id: string;
  name: string;
  icon: IconType;
};

/** Single source of truth for the page sections — shared by the server page
 *  (which renders the section content) and the client Navigation (scroll-spy). */
export const sections: SectionMeta[] = [
  { id: "home", name: "Overview", icon: FaHome },
  { id: "about", name: "About", icon: FaUser },
  { id: "skills", name: "Expertise", icon: FaCode },
  { id: "experience", name: "Experience", icon: FaBriefcase },
  { id: "projects", name: "Selected Works", icon: FaProjectDiagram },
  { id: "certificates", name: "Certifications", icon: FaCertificate },
  { id: "awards", name: "Honors", icon: FaAward },
  { id: "languages", name: "Languages", icon: FaGlobe },
  { id: "contact", name: "Contact", icon: FaEnvelope },
];

/** The eight sections shown in the top navigation (contact lives in the footer). */
export const navSections = sections.slice(0, 8);
