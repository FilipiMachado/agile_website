import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-1 max-md:flex-col">
      <p>Made With ❤️ By Fe Rodrigues</p>

      <div className="flex gap-x-9">
        <Link href="/terms-of-use">Terms & Conditions</Link>
        <Link href="/terms-of-use">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
