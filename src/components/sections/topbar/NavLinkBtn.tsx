import "./NavLinkBtn.css";
import { Link } from "react-router-dom";
import { SheetClose } from "@/components/ui/sheet";

interface NavLinkBtnProps {
  text: string;
  to: string;
  isActive: boolean;
}

const NavLinkBtn: React.FC<NavLinkBtnProps> = ({ text, to, isActive }) => {
  return (
    <SheetClose asChild>
      <Link
        to={to}
        className={`nav-link-btn ${isActive ? "text-myColor-orange" : "text-myColor-white"}`}
      >
        {text}
      </Link>
    </SheetClose>
  );
};

export default NavLinkBtn;
