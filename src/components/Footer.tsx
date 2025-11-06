const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-semibold mb-1">Portfolio</p>
            <p className="text-sm opacity-80">
              © {currentYear} All rights reserved
            </p>
          </div>
{/* 
          <div className="text-center md:text-right">
            <p className="text-sm opacity-80 mb-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
            <p className="text-sm opacity-80">
              Designed with <span className="text-primary">♥</span> and passion
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
