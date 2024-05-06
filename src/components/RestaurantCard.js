import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, locality, avgRating, costForTwo } =
    resData?.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      ></img>
      <h2>{name}</h2>
      <h3>{locality}</h3>
      <h3>{avgRating + " stars"}</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

export default RestaurantCard;