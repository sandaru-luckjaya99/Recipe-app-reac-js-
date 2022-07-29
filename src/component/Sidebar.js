export default function Sidebar({ links }) {
  return (
    <div className="sidebar">

      {links.map((link) => (
        <a href="#!" key={link.name}>
          {link.name}
        </a>
      ))}

    </div>
  );
}
