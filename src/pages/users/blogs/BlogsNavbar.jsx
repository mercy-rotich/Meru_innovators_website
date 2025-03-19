import React from "react";
import { Menu } from "antd";

const BlogsNavbar = ({ onNavigate, activeKey }) => {
  const navItems = [
    { title: "Latest", key: "latest" },
    { title: "Development", key: "development" },
    { title: "Design", key: "design" },
    { title: "Technology", key: "technology" },
    { title: "AI", key: "ai" },
    { title: "Graphic", key: "graphic" },
    { title: "Block Chain", key: "blockchain" },
  ];

  return (
    <Menu
      mode="horizontal"
      theme="light"
      selectedKeys={[activeKey]}
      className="mb-[0.5rem]  z-20 left-0 right-0 px-auto sm:px-[4rem] theme-toggler  blogs-navbar bg-gradient-to-b from-[#fef9c3] to-[#fef9c3]
 justify-between"
      style={{ lineHeight: "64px" }}
    >
      {navItems.map((item) => (
        <Menu.Item
          key={item.key}
          className={`text-xs sm:text-sm ${
            activeKey === item.key ? "text-blue-600 font-bold" : ""
          }`}
          onClick={() => onNavigate(item.key)}
        >
          {item.title}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default BlogsNavbar;
