import React from "react";
import CityService from "../services/cityService";
import WorkTypeService from "../services/workTypeService";
import WorkTimeService from "../services/workTimeService";
import JobPositionService from "../services/jobPositionsService";
import { Form } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

export default function Filter() {
  const [cities, setCities] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    let cityService = new CityService();
    cityService
      .getCities()
      .then((result) => setCities(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {},
  });
  // initialValues: {
  //     date: filters.date,
  //     cityId: filters.cityId,
  //     jobTypeId: filters.jobTypeId,
  //     jobTimeId: filters.jobTimeId,
  //     jobPositionId: filters.jobPositionId,
  //   },
  //   onSubmit: (values) => {
  //     dispatch(addFilter(values));
  //   },
  return (
    <div>
      <Form>
        <Form.Checkbox />
      </Form>
    </div>
  );
}
