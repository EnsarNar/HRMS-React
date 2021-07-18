import React, { useState } from "react";
import {
  Grid,
  Menu,
  Icon,
  Divider,
  Accordion,
  Segment,
  Button,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
export default function CandidateSidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  let handleClick = (e, titleProps) => {
    let index = titleProps.index;

    let newIndex = activeIndex === index ? 0 : index;
    setActiveIndex(newIndex);
  };
  return (
    <div>
      <Grid padded>
        <Grid.Column computer={3} only="computer" id="sidebar">
          <Menu vertical borderless fluid text>
            <label>
              <Menu.Item as={NavLink} to="/candidate/getAllAdverts">
                <Icon name="list" />
                Tüm İlanları Gör
              </Menu.Item>
            </label>

            <Divider />
            <label>
              <Menu.Item>
                <Accordion>
                  <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={(e, titleProps) => handleClick(e, titleProps)}
                  >
                    <Icon name="dropdown" />
                    CV İşlemleri
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 1}>
                    <Menu.Item as={NavLink} to="/candidate/addResume">
                      <Icon name="plus" />
                      CV Ekle
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/candidate/myResumes">
                      <Icon name="eye" />
                      CV'lerim
                    </Menu.Item>
                  </Accordion.Content>
                </Accordion>
              </Menu.Item>
            </label>

            <Divider />
          </Menu>
        </Grid.Column>
      </Grid>
    </div>
  );
}
