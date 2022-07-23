import "./footer.css";
import SvgComponent from "./SvgComponent";

export default function Footer() {
  let out = (
    <footer className="footer">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://t.me/dovbanAndrey"
      >
        <SvgComponent name="telegram" />
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/AnderyDov?tab=repositories"
      >
        <SvgComponent name="github" />
      </a>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="http://professionalwebdev.ru/"
      >
        <SvgComponent name="youtube" />
      </a>
    </footer>
  );

  return out;
}
