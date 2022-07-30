import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar({ links , close }) {
  return (
    <div className="sidebar" onClick={close} >

      {links.map((link) => (
        <a className="sidebar-links" href="#!" key={link.name}>
          <FontAwesomeIcon icon={link.icon}></FontAwesomeIcon>
          {link.name}
        </a>
      ))}

    </div>
  );
}
