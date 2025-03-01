import React from "react";
import { Menu } from "antd";

const BlogsNavbar = ({ onNavigate }) => {
  const navItems = [
    { title: "All", key: "live-ticker" },
    { title: "Development", key: "top-gainers-losers" },
    { title: "Design", key: "market-news" },
    { title: "Technology", key: "currency-exchange-rates" },
    { title: "AI", key: "commodities-overview" },
    { title: "Graphic", key: "graphic" },
    { title: "Block Chain", key: "blockchain" },
    // { title: "PORTFOLIO", key: "portfolio" },
  ];

  return (
    <Menu
      mode="horizontal"
      theme="light"
      defaultSelectedKeys={["live-ticker"]}
      className="mb-[0.5rem] fixed z-20 left-0 right-0 px-auto pr-[-1rem] sm:pr-[4rem] justify-between"
    >
      {navItems.map((item) => (
        <Menu.Item
          key={item.key}
          className="text-xs mx-auto sm:text-sm"
          onClick={() => onNavigate(item.key)}
        >
          {item.title}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default BlogsNavbar;
