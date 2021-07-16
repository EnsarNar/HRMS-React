import React from "react";
import { Dropdown, Label, Button } from "semantic-ui-react";
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
              <Label>{fav.jobAdvertisement.employer.companyName}</Label>
            </Dropdown.Item>
          ))}

          <Dropdown.Divider />
          <Dropdown.Item>Favorilere git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
