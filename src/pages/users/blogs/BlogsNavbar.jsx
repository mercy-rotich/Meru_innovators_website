import React from "react";
import { Menu } from "antd";

const BlogsNavbar = ({ onNavigate, activeKey }) => {
  const navItems = [
    { title: "All", key: "live-ticker" },
    { title: "Development", key: "top-gainers-losers" },
    { title: "Design", key: "market-news" },
    { title: "Technology", key: "currency-exchange-rates" },
    { title: "AI", key: "commodities-overview" },
    { title: "Graphic", key: "graphic" },
    { title: "Block Chain", key: "blockchain" },
  ];

  return (
    <Menu
      mode="horizontal"
      theme="light"
      selectedKeys={[activeKey]} // Use selectedKeys to control the active item
      className="mb-[0.5rem]  z-20 left-0 right-0 px-auto sm:px-[4rem] theme-toggler  blogs-navbar bg-gradient-to-b from-[#fef9c3] to-[#fef9c3]
 justify-between"
      style={{ lineHeight: "64px" }} // Adjust line height for better alignment
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

export default BlogsNavbar;
