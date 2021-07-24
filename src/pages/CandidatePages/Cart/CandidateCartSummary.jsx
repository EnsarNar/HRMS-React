import React from "react";
import { Dropdown, DropdownDivider, Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";

export default function CandidateCartSummary() {
  const favoriteItems = useSelector((state) => state.favorites.favoriteItems);

  return (
    <div>
      <Dropdown item text="Favoriler">
        <Dropdown.Menu>
          {/* <Button onClick={() => console.log(favoriteItems)}>tıkla</Button> */}
          {favoriteItems.map((fav) => (
            <Dropdown.Item key={`favsummary${fav.jobAdvertisement.id}`}>
              <strong>{fav.jobAdvertisement.employer.companyName}</strong> |
              {fav.jobAdvertisement.jobPosition.jobPosition}
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item style={{ textAlign: "center" }}>
            Favorilere git <Icon color="yellow" name="favorite" />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
