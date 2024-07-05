import React from "react";

import Logo from "./Images/Logo.svg";
import GoogleIcon from "./Images/GoogleIcon.svg";
import FacebookIcon from "./Images/FacebookIcon.svg";
import HomeIcon from "../SVGIcons/SVGIconFile/HomeIcon.svg";
import PremiumStarIcon from "../SVGIcons/SVGIconFile/PremiumStarIcon.svg";
import FilterIcon from "../SVGIcons/SVGIconFile/FilterIcon.svg";
import LocationIcon from "../SVGIcons/SVGIconFile/LocationIcon.svg";
import StarReview from "../SVGIcons/SVGIconFile/StarReview.svg";
import ShareIcon from "../SVGIcons/SVGIconFile/ShareIcon.svg";
import WishlistIcon from "../SVGIcons/SVGIconFile/WishlistIcon.svg";
import BackIcon from "../SVGIcons/SVGIconFile/BackIcon.svg";
import MapImage from "../Images/MapImage.svg";

//category
import MountainIcon from "../SVGIcons/SVGIconFile/MountainIcon.svg";
import BeachIcon from "../SVGIcons/SVGIconFile/BeachIcon.svg";
import CampingIcon from "../SVGIcons/SVGIconFile/CampingIcon.svg";
import ParkIcon from "../SVGIcons/SVGIconFile/ParkIcon.svg";

const SVGIcons = {
  Logo: (props) => <Logo {...props} />,
  GoogleIcon: (props) => <GoogleIcon {...props} />,
  FacebookIcon: (props) => <FacebookIcon {...props} />,
  HomeIcon: (props) => <HomeIcon {...props} />,
  BackIcon: (props) => <BackIcon {...props} />,
  WishlistIcon: (props) => <WishlistIcon {...props} />,
  ShareIcon: (props) => <ShareIcon {...props} />,
  StarReview: (props) => <StarReview {...props} />,
  LocationIcon: (props) => <LocationIcon {...props} />,
  FilterIcon: (props) => <FilterIcon {...props} />,
  PremiumStarIcon: (props) => <PremiumStarIcon {...props} />,
  ParkIcon: (props) => <ParkIcon {...props} />,
  CampingIcon: (props) => <CampingIcon {...props} />,
  BeachIcon: (props) => <BeachIcon {...props} />,
  MountainIcon: (props) => <MountainIcon {...props} />,
  MapImage: (props) => <MapImage {...props} />,
};

const SVGImages = {
  ...SVGIcons,
};

export default SVGImages;
