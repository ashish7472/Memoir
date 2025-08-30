const Footer = () => {
  return (
    <footer className="footer footer-center p-6 bg-base-200 border-t border-base-300">
      <div>
        <p className="text-base-content/70">
          &copy; {new Date().getFullYear()} Memoir | Created with ❤️ by{" "}
          <span className="text-primary font-semibold">
            Ashish Rolan
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
