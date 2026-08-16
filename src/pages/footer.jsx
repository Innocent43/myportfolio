import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram, FaReddit } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";

import { FaThreads, FaBluesky } from "react-icons/fa6";

function Footer() {
  const iconStyle = {
    color: "#e2dbf0",
    fontSize: "1.4rem",
    transition: "color 0.3s ease-in, transform 0.3s ease-in",
  };

  const socialLinks = [
    {
      icon: <FaFacebook style={iconStyle} />,
      url: "https://web.facebook.com/profile.php?id=61593301383825",
      label: "Facebook",
    },
    {
      icon: <FaWhatsapp style={iconStyle} />,
      url: "https://wa.me/2349011377975",
      label: "WhatsApp",
    },
    {
      icon: <FaInstagram style={iconStyle} />,
      url: "https://instagram.com/Inno_ddev",
      label: "Instagram",
    },
    {
      icon: <FaThreads style={iconStyle} />,
      url: "https://threads.net/@inno_ddev",
      label: "Threads",
    },
    {
      icon: <FaReddit style={iconStyle} />,
      url: "https://reddit.com/u/Innocent8888",
      label: "Reddit",
    },
    {
      icon: <FaBluesky style={iconStyle} />,
      url: "https://bsky.app/profile/@inno-cent01.bsk.social",
      label: "Bluesky",
    },
    {
      icon: <SlSocialLinkedin style={iconStyle} />,
      url: "https://www.linkedin.com/in/chinemerem-innocent-133b62365?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      label: "linkedIn",
    },
  ];

  return (
    <footer
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "3rem auto 0 auto",
        padding: "2.5rem 1.5rem 1.5rem 1.5rem",
        borderTop: "1px solid #a370f7",
        textAlign: "center",
        color: "#94a3b8",
      }}
    >
      <h3
        style={{
          color: "#ffffff",
          fontSize: "1.3rem",
          marginBottom: "0.5rem",
        }}
      >
        Let's build something great together
      </h3>
      <p
        style={{
          fontSize: "0.95rem",
          maxWidth: "480px",
          margin: "0 auto 1.5rem auto",
          lineHeight: "1.5",
        }}
      >
        Open to freelance projects and collaboration. Reach out on any platform
        below, or use the contact form above.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.3rem",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              border: "1px solid #a370f7",
              textDecoration: "none",
            }}
          >
            {item.icon}
          </a>
        ))}
      </div>

      <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>
        © {new Date().getFullYear()} Innocent. Built with React.
      </p>
    </footer>
  );
}

export default Footer;
