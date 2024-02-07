import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
export const SideBarData = [
  {
    title: "Home",
    icon: <FaUserAlt />,
    link: "/home",
  },
  {
    title: "About",
    icon: <MDBIcon fas icon="home" />,
    link: "/about",
  },
  {
    title: "Dashboard",
    icon: <FaTh />,
    link: "/dashboard",
  },
  {
    title: "Images",
    icon: <MDBIcon fas icon="home" />,
    link: "/images",
  },
];
