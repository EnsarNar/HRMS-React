import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import KodlamaIoTextInput from "../../utilities/customFormControls/KodlamaIoTextInput";
import { Progress, Button } from "semantic-ui-react";
import KodlamaIoTextInputForTextArea from "../../utilities/customFormControls/KodlamaIoTextInputForTextArea";
import { useDispatch, useSelector } from "react-redux";
import { incresePercent } from "../../store/actions/percentActions";
export default function CompulsoryResumeAdd() {
  const dispatch = useDispatch();
  let progressPercent = useSelector(
    (state) => state.progressPercent.progressPercent
  );

  const initialValues = {
    candidateFirstName: "",
    candidateLastName: "",
    coverLetter: "",
  };
  const schema = Yup.object({
    candidateFirstName: Yup.string().required("Bu kısım boş geçilemez"),
    candidateLastName: Yup.string().required("Bu kısım boş geçilemez"),
    coverLetter: Yup.string().required("Bu kısım boş geçilemez"),
  });

  let handleProgressBar = () => {
    dispatch(incresePercent(25));
  };

  return (
    <div>
      <h2>CV Ekleme Formu</h2>
      {console.log(progressPercent)}
      {/* <Progress percent={this.progressPercent} indicating /> */}
      <Formik
        className="main"
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          handleProgressBar();
        }}
      >
        {/* <Container> */}

        <Form className="ui form">
          <KodlamaIoTextInput
            name="candidateFirstName"
            placeholder="candidateFirstName"
          />

          <div className="ui inverted divider"></div>
          <KodlamaIoTextInput
            name="candidateLastName"
            placeholder="candidateLastName"
          />
          <div className="ui inverted divider"></div>
          <KodlamaIoTextInputForTextArea
            name="coverLetter"
            placeholder="coverLetter"
            style={{ minHeight: 100 }}
          />
          <div className="ui inverted divider"></div>
          <Button.Group>
            <Button color="red">Geri</Button>
            <Button.Or text="or" />
            <Button color="green" type="submit">
              İleri
            </Button>
          </Button.Group>
        </Form>

        {/* <Form className="ui form">
            

            <div className="ui inverted divider"></div>

            <KodlamaIoTextInput
              name="candidateFirstName"
              placeholder="candidateFirstName"
            />

            <div className="ui inverted divider"></div>
            <KodlamaIoTextInput
              name="candidateLastName"
              placeholder="candidateLastName"
            />
            <div className="ui inverted divider"></div>
            <KodlamaIoTextInputForTextArea
              name="coverLetter"
              placeholder="coverLetter"
              style={{ minHeight: 100 }}
            ></KodlamaIoTextInputForTextArea>
            <div className="ui inverted divider"></div>
            <div>
              <Button.Group>
                <Button color="red">Geri</Button>
                <Button.Or text="or" />
                <Button color="green" type="submit">
                  İleri
                </Button>
              </Button.Group>
            </div>
          </Form> */}
        {/* </Container> */}
      </Formik>
    </div>
  );
}
