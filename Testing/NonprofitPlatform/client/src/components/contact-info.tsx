import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Contact Us</h3>
      
      <div className="space-y-2">
        <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <FaPhone className="h-4 w-4" />
          <span>(123) 456-7890</span>
        </a>
        <a href="mailto:contact@nonprofit.org" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <FaEnvelope className="h-4 w-4" />
          <span>contact@nonprofit.org</span>
        </a>
      </div>

      <div className="flex gap-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
           className="text-muted-foreground hover:text-primary">
          <FaFacebook className="h-6 w-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
           className="text-muted-foreground hover:text-primary">
          <FaTwitter className="h-6 w-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
           className="text-muted-foreground hover:text-primary">
          <FaInstagram className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
