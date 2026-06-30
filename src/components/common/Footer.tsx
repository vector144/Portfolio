import React from "react";
import { DATA } from "../../data/portfolioData";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
          <p>
            Design & built by{" "}
            <span className="text-[var(--neon-green)]">{DATA.name}</span>
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
