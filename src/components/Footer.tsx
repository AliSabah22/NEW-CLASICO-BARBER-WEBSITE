import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-display mb-4">Clasico</h3>
            <p className="text-white/80 mb-6">
              Where style meets legacy. Experience the art of grooming in its purest form.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://instagram.com/clasicobarbershop105" icon="📷" />
              <SocialLink href="https://tiktok.com/@clasicobarbershop105" icon="🎵" />
              <SocialLink href="https://maps.app.goo.gl/your-google-business-link" icon="📍" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#experience">Experience</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-lg font-display mb-4">Visit Us</h4>
            <address className="not-italic text-white/80 mb-4">
              3480 Platinum Dr., Unit 105<br />
              Mississauga, ON L5M 2S4
            </address>
            <div className="space-y-2">
              <p className="text-white/80">
                <span className="font-medium">Hours:</span><br />
                Mon - Sat: 10AM - 10PM<br />
                Sun: Closed
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-display mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg
                         focus:outline-none focus:border-accent text-white placeholder-white/50"
              />
              <button
                className="w-full btn-primary hover:scale-105 transition-transform duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Clasico Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: string }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                 hover:bg-accent transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-lg">{icon}</span>
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-white/80 hover:text-accent transition-colors duration-300"
      >
        {children}
      </Link>
    </li>
  );
} 