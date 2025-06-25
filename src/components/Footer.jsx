import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="py-4 text-sm text-center">
      <p className="text-gray-300">© 2025 WEATHERLY | All Rights Reserved</p>
      <div className="mt-2 space-x-4">
        <Link to="/" className="hover:text-skyBlue">Home</Link>
        <Link to="/privacy" className="hover:text-skyBlue">Privacy</Link>
        <Link to="/policy" className="hover:text-skyBlue">Policy</Link>
        <Link to="/contact" className="hover:text-skyBlue">Contact</Link>
      </div>
    </div>
  );
}
