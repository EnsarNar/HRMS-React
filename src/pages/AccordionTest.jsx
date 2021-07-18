import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";

export default function AccordionTest() {
  const [activeIndex, setActiveIndex] = useState(0);

  let handleClick = (e, titleProps) => {
    let index = titleProps.index;

    let newIndex = activeIndex === index ? 0 : index;
    setActiveIndex(newIndex);
  };
  return (
    <div>
      {console.log(activeIndex)}
      <Accordion>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={(e, titleProps) => handleClick(e, titleProps)}
        >
          <Icon name="dropdown" />
          What is a dog?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}></Accordion.Content>
      </Accordion>
    </div>
  );
}
