import "./Footer.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

const socialMedia = [
  {
    id: 1,
    socialmedia: "github",
    image: { github },
    link: "https://github.com/marianotourne",
  },
  {
    id: 2,
    socialmedia: "linkedin",
    image: { linkedin },
    link: "www.linkedin.com/in/marianotourne",
  },
];

export const Footer = () => {
  return (
    <footer>
      <section className="footer-name">
        <p>Desarrolado por Mariano Tourné</p>
      </section>
      <section className="footer-media">
        <ul>
          <li>
            <a href="https://github.com/marianotourne" target="_blank">
              <img src={github} alt="github" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/marianotourne" target="_blank">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
        </ul>
        {/* <ul>
          {socialMedia.map((media) => (
            <li key={media.id}>
              <a href="media.link">
                <img src={media.image} alt={media.socialmedia} />
              </a>
            </li>
          ))}
        </ul> */}
      </section>
    </footer>
  );
};
