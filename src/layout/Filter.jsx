import React from "react";
import CityService from "../services/cityService";
import WorkTypeService from "../services/workTypeService";
import WorkTimeService from "../services/workTimeService";
import JobPositionService from "../services/jobPositionsService";
import { Form } from "semantic-ui-react";
export default function Filter() {
  return (
    <div>
      <Form>
        <Form.Checkbox />
      </Form>
    </div>
  );
}
