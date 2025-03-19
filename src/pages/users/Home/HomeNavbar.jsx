import React from "react";
import { Menu } from "antd";

const HomeNavbar = ({ onNavigate, activeKey }) => {
  const navItems = [
    { title: "About", key: "about" },
    { title: "Core Values", key: "core-values" },
    { title: "Events Highlights", key: "events-highlights" },
    { title: "Latest Blogs", key: "latest-blogs" },
    { title: "Testimonials", key: "testimonials" },
    { title: "Partners", key: "partners" },
  ];

  return (
    <Menu
      mode="horizontal"
      theme="light"
      selectedKeys={[activeKey]}
      className="mb-[0.5rem]  left-0 right-0 px-auto sm:px-[4rem] theme-toggler blogs-navbar bg-gradient-to-b from-[#fef9c3] to-[#fef9c3] justify-between"
      style={{ lineHeight: "64px" }}
    >
      {navItems.map((item) => (
        <Menu.Item
          key={item.key}
          className="text-xs sm:text-sm"
          onClick={() => onNavigate(item.key)}
        >
          {item.title}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default HomeNavbar;
