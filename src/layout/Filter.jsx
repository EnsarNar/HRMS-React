import React from "react";
import CityService from "../services/cityService";
import WorkTypeService from "../services/workTypeService";
import WorkTimeService from "../services/workTimeService";
import JobPositionService from "../services/jobPositionsService";
import { Form, Icon, Button, Segment, Divider } from "semantic-ui-react";
import { useState, useEffect } from "react";
import KodlamaIoFilter from "../utilities/customFormControls/KodlamaIoFilter";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addNewFilter, clearFilter } from "../store/actions/filterActions";
export default function Filter() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [jobPositions, setJobPositions] = useState([]);
  const [selectedJobPosition, setSelectedJobPosition] = useState("");
  const [workTypes, setWorkTypes] = useState([]);
  const [selectedWorkType, setSelectedWorkType] = useState("");
  const [workTimes, setWorkTimes] = useState([]);
  const [selectedWorkTime, setSelectedWorkTime] = useState("");
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filterValues.filterValues);

  useEffect(() => {
    let cityService = new CityService();
    cityService
      .getCities()
      .then((result) => setCities(result.data.data))
      .catch((err) => console.log(err.message));

    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data))
      .catch((err) => console.log(err.message));

    let workTimeService = new WorkTimeService();
    workTimeService
      .getWorkTimes()
      .then((result) => setWorkTimes(result.data.data))
      .catch((err) => console.log(err.message));

    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  const cityOptions = [];
  const workTypeOptions = [];
  const workTimeOptions = [];
  const jobPositionOptions = [];

  const formik = useFormik({
    initialValues: {
      cityId: filters.cityId,
      workTypeId: filters.workTypeId,
      workTimeId: filters.workTimeId,
      jobPositionId: filters.jobPositionId,
    },
    onSubmit: (values) => {
      console.log(values);
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
  workTypes.map((workType) =>
    workTypeOptions.push({
      key: workType.id,
      value: workType.id,
      text: workType.workType,
    })
  );
  workTimes.map((workTime) =>
    workTimeOptions.push({
      key: workTime.id,
      value: workTime.id,
      text: workTime.workTime,
    })
  );
  jobPositions.map((position) =>
    jobPositionOptions.push({
      key: position.id,
      value: position.id,
      text: position.jobPosition,
    })
  );

  const filterList = (value, field, list) => {
    formik.setFieldValue(
      field,
      list.includes(value)
        ? [...list.filter((i) => i !== value)]
        : [...list, value]
    );
  };
  const cityOnChange = (e, value) => {
    filterList(value, "cityId", formik.values.cityId);
  };
  const workTypeOnChange = (e, value) => {
    filterList(value, "workTypeId", formik.values.workTypeId);
  };
  const workTimeOnChange = (e, value) => {
    filterList(value, "workTimeId", formik.values.workTimeId);
  };
  const jobPositionOnChange = (e, value) => {
    filterList(value, "jobPositionId", formik.values.jobPositionId);
  };

  // let onChangeForCheckbox = (e, value) => {
  //   formik.setFieldValue(
  //     "cityId",
  //     formik.values.cityId.includes(value)
  //       ? [...formik.values.cityId.filter((i) => i !== value)]
  //       : [...formik.values.cityId, value]
  //   );
  // };

  return (
    <div>
      {/* {console.log(filters)} */}
      <Form onSubmit={formik.handleSubmit}>
        <Segment>
          <KodlamaIoFilter
            placeholder="Şehre Göre Filtrele"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            label="Şehre Göre Filtrele"
            options={cityOptions}
            onChangeForCheckbox={cityOnChange}
            list={formik.values.cityId}
          />

          <Divider />

          <KodlamaIoFilter
            placeholder="İş Türüne Göre Filtrele"
            value={selectedWorkType}
            onChange={(e) => setSelectedWorkType(e.target.value)}
            label="İş Türüne Göre Filtrele"
            options={workTypeOptions}
            onChangeForCheckbox={workTypeOnChange}
            list={formik.values.workTypeId}
          />
          <Divider />

          <KodlamaIoFilter
            placeholder="İş Zamanına Göre Filtrele"
            value={selectedWorkTime}
            onChange={(e) => setSelectedWorkTime(e.target.value)}
            label="İş Zamanına Göre Filtrele"
            options={workTimeOptions}
            onChangeForCheckbox={workTimeOnChange}
            list={formik.values.workTimeId}
          />
          <Divider />

          <KodlamaIoFilter
            placeholder="İşe Göre Filtrele"
            value={selectedJobPosition}
            onChange={(e) => setSelectedJobPosition(e.target.value)}
            label="İşe Göre Filtrele"
            options={jobPositionOptions}
            onChangeForCheckbox={jobPositionOnChange}
            list={formik.values.jobPositionId}
          />
        </Segment>
        <Button type="submit" icon color="green">
          <Icon name="filter" />
          Filtrele
        </Button>
      </Form>

      <Button
        color="red"
        icon
        style={{ marginTop: "0.6em" }}
        onClick={() => handleResetFilterValues()}
      >
        <Icon name="remove circle" />
        Filtreleri Kalır
      </Button>
    </div>
  );
}
