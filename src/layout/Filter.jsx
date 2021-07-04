import React from "react";
import CityService from "../services/cityService";
import WorkTypeService from "../services/workTypeService";
import WorkTimeService from "../services/workTimeService";
import JobPositionService from "../services/jobPositionsService";
import { Form, Input, Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addNewFilter, clearFilter } from "../store/actions/filterActions";
export default function Filter() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filterValues.filterValues);

  useEffect(() => {
    let cityService = new CityService();
    cityService
      .getCities()
      .then((result) => setCities(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  const cityOptions = [];

  const formik = useFormik({
    initialValues: {
      cityId: filter.cityId,
      workTypeId: filter.workTypeId,
      workTimeId: filter.workTimeId,
      jobPositionId: filter.jobPositionId,
    },
    onSubmit: (values) => {
      dispatch(addNewFilter(values));
    },
  });

  let handleResetFilterValues = () => {
    formik.resetForm(formik.values);
    dispatch(clearFilter());
  };
  cities.map((city) =>
    cityOptions.push({
      key: city.id,
      value: city.id,
      text: city.cityName,
    })
  );

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field
          label="Şehre göre filtrele"
          value={selectedCity}
          placeholder="Şehre göre filtrele"
          onChange={(e) => setSelectedCity(e.target.value)}
        />
        <div
          style={{ overflowY: "auto", maxHeight: "200px", margin: "10px 10px" }}
        >
          {cityOptions.map((option) => (
            <Form.Checkbox
              onChange={(e, { value }) => {
                formik.setFieldValue(
                  "cityId",
                  formik.values.cityId.includes(value)
                    ? [...formik.values.cityId.filter((i) => i !== value)]
                    : [...formik.values.cityId, value]
                );
              }}
              key={option.key}
              checked={formik.values.cityId.includes(option.value)}
              label={option.text}
              value={option.value}
            />
          ))}
        </div>
        {console.log(formik.values)}
      </Form>

      <Button onClick={() => handleResetFilterValues()}>
        Filtreleri Kalır
      </Button>
    </div>
  );
}
