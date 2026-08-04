import { Logo } from "@/components/Logo";
import { Github, Twitter, Linkedin } from "lucide-react";

const COLUMNS = [
  {
    title: "Product",
    links: ["How it works", "School ERP", "Admissions portal", "Parents portal", "Admin dashboard"],
  },
  {
    title: "For Schools",
    links: ["Features", "Security", "Support", "Branding", "Pricing"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact", "Press kit"],
  },
];

const SOCIALS = [Github, Twitter, Linkedin];

export function Footer() {
  return (
    <footer className="border-t border-slate-900/5 bg-white">
      <div className="container-px relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              The full school ERP for modern schools. Run admissions, academics, attendance, and finance from one
              connected platform.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-bold text-ink">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="text-sm text-muted transition-colors hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-7 sm:flex-row">
          <p className="text-center text-xs text-muted">
            © {new Date().getFullYear()} ShegaSchool. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <a href="#top" className="transition-colors hover:text-primary">Privacy</a>
            <a href="#top" className="transition-colors hover:text-primary">Terms</a>
            <a href="#top" className="transition-colors hover:text-primary">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}