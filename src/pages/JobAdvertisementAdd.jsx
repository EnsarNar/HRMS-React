import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik"; //Form
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import EmployerService from "../services/employerService";
import JobPositionService from "../services/jobPositionsService";
import { Container } from "semantic-ui-react";
import CityService from "../services/cityService";
import KodlamaIoInput from "../utilities/customFormControls/KodlamaIoInput";
import JobAdvertisementService from "../services/jobAdvertisementService";
import WorkTimeService from "../services/workTimeService";
import WorkTypeService from "../services/workTypeService";
import { useHistory } from "react-router-dom";

export default function JobAdvertisementAdd() {
  //Getting Cities
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [workTimes, setWorkTimes] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [employers, setEmployers] = useState([]); //Burası JWT ile hallolacak ileride silinecek.
  const history = useHistory();

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data))
      .catch((err) => console.log(err.message));

    let workTimeService = new WorkTimeService();
    workTimeService
      .getWorkTimes()
      .then((result) => setWorkTimes(result.data.data))
      .catch((err) => console.log(err.message));

    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data))
      .catch((err) => console.log(err.message));

    let cityService = new CityService();
    cityService
      .getCities()
      .then((result) => setCities(result.data.data))
      .catch((err) => console.log(err.message));

    let employerService = new EmployerService(); //Burası JWT ile hallolacak ileride silinecek.
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);

  const initialValues = {
    defination: "",
    numberOfOpenPositions: "",
    salary: "",
    applicationDeadline: "",
    jobPositionId: "",
    cityId: "",
    workTypeId: "",
    employerId: "",
    workTimeId: "",
  };

  const schema = Yup.object({
    defination: Yup.string().required("Bu kısım boş geçilemez."),
    applicationDeadline: Yup.date().required("Bu kısım boş geçilemez."),
    numberOfOpenPositions: Yup.number().required("Bu kısım boş geçilemez."),
    salary: Yup.number().required("Bu kısım boş geçilemez."),
    jobPositionId: Yup.number().required("Bu kısım boş geçilemez."),
    cityId: Yup.number().required("Bu kısım boş geçilemez."),
    workTypeId: Yup.number().required("Bu kısım boş geçilemez."),
    employerId: Yup.number().required("Bu kısım boş geçilemez."),
    workTimeId: Yup.number().required("Bu kısım boş geçilemez."),
  });

  let addToDataBase = (values) => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .addJobAdvertisement(values)
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <h2 className="opacity">Job Advertisement Adding Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          addToDataBase(values);
          history.push("/employer/myAdverts");
        }}
      >
        <Container style={{ paddingRight: "4em" }}>
          <Form className="ui form">
            {/* DEFINATION */}
            <KodlamaIoTextInput name="defination" placeholder="defination" />
            <div className="ui inverted divider"></div>

            {/* SALARY */}
            <KodlamaIoTextInput name="salary" placeholder="salary" />
            <div className="ui inverted divider"></div>

            {/* APPLICATION DEADLINE */}
            <KodlamaIoTextInput
              name="applicationDeadline"
              placeholder="applicationDeadline"
            />
            <div className="ui inverted divider"></div>

            {/* NUMBER OF OPEN POSITIONS */}
            <KodlamaIoTextInput
              name="numberOfOpenPositions"
              placeholder="numberOfOpenPositions"
            />
            <div className="ui inverted divider"></div>
            {/* JOB POSITIONS DROPDOWN */}

            <KodlamaIoInput as="select" name="jobPositionId">
              <option selected hidden>
                Pozisyon Seçiniz
              </option>
              {jobPositions.map((position) => (
                <option key={position.id} value={position.id}>
                  {position.jobPosition}
                </option>
              ))}
            </KodlamaIoInput>
            <div className="ui inverted divider"></div>
            {/* CITY DROPDOWN */}
            <KodlamaIoInput as="select" name="cityId">
              <option selected hidden>
                Şehir Seçiniz
              </option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.cityName}
                </option>
              ))}
            </KodlamaIoInput>
            <div className="ui inverted divider"></div>
            {/* WORK TIME DROPDOWN */}
            <KodlamaIoInput as="select" name="workTimeId">
              <option selected hidden>
                Çalışma Saati Seçiniz
              </option>
              {workTimes.map((workTime) => (
                <option key={workTime.id} value={workTime.id}>
                  {workTime.workTime}
                </option>
              ))}
            </KodlamaIoInput>
            <div className="ui inverted divider"></div>
            {/* WORK TYPE DROPDOWN */}
            <KodlamaIoInput as="select" name="workTypeId">
              <option selected hidden>
                Çalışma Tipi Seçiniz
              </option>
              {workTypes.map((workType) => (
                <option key={workType.id} value={workType.id}>
                  {workType.workType}
                </option>
              ))}
            </KodlamaIoInput>
            <div className="ui inverted divider"></div>
            {/* EMPLOYER DROPDOWN */}
            <KodlamaIoInput as="select" name="employerId">
              <option selected hidden>
                Şirket Adını Seçiniz
              </option>
              {employers.map((employer) => (
                <option key={employer.id} value={employer.id}>
                  {employer.companyName}
                </option>
              ))}
            </KodlamaIoInput>

            <Button color="green" type="submit">
              Ekle
            </Button>
          </Form>
        </Container>
      </Formik>
    </div>
  );
}
