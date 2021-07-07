import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Grid, Segment, Button, Progress } from "semantic-ui-react";
import CompulsoryResumeAdd from "./CompulsoryResumeAdd";

export default function ResumeAdd() {
  const [percent, setPercent] = useState(0);

  let incrementPercent = () => {
    setPercent(percent + 25);
    console.log("IM HERE");
  };
  return (
    <div>
      <Grid>
        <Grid.Column width={12}>
          CV Ekleyin !
          <Progress percent={percent} indicating />
          <CompulsoryResumeAdd />
          <Button onClick={() => incrementPercent()}>Increment</Button>
        </Grid.Column>

        <Grid.Column width={4}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </Grid.Column>
      </Grid>
    </div>
  );
}
