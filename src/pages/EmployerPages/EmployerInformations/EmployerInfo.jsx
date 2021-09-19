import React, { useRef, useEffect, useState } from "react";

import {
  Table,
  Icon,
  Container,
  Button,
  Divider,
  Grid,
} from "semantic-ui-react";
import EmployerService from "../../../services/employerService";
import UpdateEmployerPassword from "./UpdateEmployerPassword";
import UpdateEmployerEmail from "./UpdateEmployerEmail";
import UpdateEmployerPhoneNumber from "./UpdateEmployerPhoneNumber";
import UpdateEmployerWebAdress from "./UpdateEmployerWebAdress";
export default function EmployerInfo() {
  const [employers, setEmployers] = useState([]);
  //Bu kısım ileride JWT ile düzeltilecek
  const [updateProcess, setOpdateProcess] = useState("");
  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployerById(31) // İleride JWT ile düzeltilecek
      .then((result) => setEmployers(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  const imageRef = useRef();
  return (
    <div>
      <h1 className="opacity">Kişisel Bilgiler</h1>
      <Divider />
      {employers.map((employer) => (
        <Container
          style={{ width: "85%", height: "60vh" }}
          className="margin-top"
          key={employer.id}
        >
          {console.log(employer)}
          <Grid>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <h2 className="opacity">~~{employer.companyName}~~</h2>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Table celled striped>
            <Table.Body>
              <Table.Row>
                {/* Email */}
                <Table.Cell>
                  <Icon name="mail" />
                  Email
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {updateProcess === "updateEmail" ? (
                    <UpdateEmployerEmail employer={employer} />
                  ) : (
                    <p>{employer.email}</p>
                  )}
                </Table.Cell>
                <Table.Cell textAlign="right">
                  {updateProcess === "updateEmail" ? (
                    <Button
                      onClick={() => setOpdateProcess("")}
                      style={{
                        padding: "7px 7px",
                        background:
                          "linear-gradient(to right, #ff416c, #ff4b2b)",
                      }}
                    >
                      <Icon name="trash" />
                      İptal Et
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setOpdateProcess("updateEmail")}
                      style={{
                        padding: "7px 7px",
                        background:
                          "linear-gradient(to right, #1d976c, #93f9b9)",
                      }}
                    >
                      <Icon name="pencil" />
                      Düzenle
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>

              {/* Phone Number */}
              <Table.Row>
                <Table.Cell>
                  <Icon name="phone" />
                  Telefon
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {updateProcess === "updatePhoneNumber" ? (
                    <UpdateEmployerPhoneNumber employer={employer} />
                  ) : (
                    <p>{employer.phoneNumber}</p>
                  )}
                </Table.Cell>
                <Table.Cell textAlign="right">
                  {updateProcess === "updatePhoneNumber" ? (
                    <Button
                      onClick={() => setOpdateProcess("")}
                      style={{
                        padding: "7px 7px",
                        background:
                          "linear-gradient(to right, #ff416c, #ff4b2b)",
                      }}
                    >
                      <Icon name="trash" />
                      İptal Et
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setOpdateProcess("updatePhoneNumber")}
                      style={{
                        padding: "7px 7px",
                        background:
                          "linear-gradient(to right, #1d976c, #93f9b9)",
                      }}
                    >
                      <Icon name="pencil" />
                      Düzenle
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>
              {/* Password */}
              <Table.Row>
                <Table.Cell>
                  <Icon name="bolt" />
                  Şifre
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {updateProcess === "updatePassword" ? (
                    <UpdateEmployerPassword employer={employer} />
                  ) : (
                    <p>{employer.password}</p>
                  )}
                </Table.Cell>
                <Table.Cell textAlign="right">
                  {updateProcess === "updatePassword" ? (
                    <Button
                      onClick={() => setOpdateProcess("")}
                      style={{
                        padding: "7px 7px",
                        background:
                          "linear-gradient(to right, #ff416c, #ff4b2b)",
                      }}
                    >
                      <Icon name="trash" />
                      İptal Et
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setOpdateProcess("updatePassword")}
                      style={{
                        padding: "7px 7px",
                        background:
                          "linear-gradient(to right, #1d976c, #93f9b9)",
                      }}
                    >
                      <Icon name="pencil" />
                      Düzenle
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>
              {/* Web Adress */}
              <Table.Row>
                <Table.Cell>
                  <Icon name="external alternate" />
                  Web Adress
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {updateProcess === "updateWebAdress" ? (
                    <UpdateEmployerWebAdress employer={employer} />
                  ) : (
                    <p>{employer.webAdress}</p>
                  )}
                </Table.Cell>
                <Table.Cell textAlign="right">
                  {updateProcess === "updateWebAdress" ? (
                    <Button
                      onClick={() => setOpdateProcess("")}
                      style={{
                        padding: "7px 7px",
                        background:
                          "linear-gradient(to right, #ff416c, #ff4b2b)",
                      }}
                    >
                      <Icon name="trash" />
                      İptal Et
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setOpdateProcess("updateWebAdress")}
                      style={{
                        padding: "7px 7px",
                        background:
                          "linear-gradient(to right, #1d976c, #93f9b9)",
                      }}
                    >
                      <Icon name="pencil" />
                      Düzenle
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Container>
      ))}
      {/* İleride şirket logosu olursa bu kod çalıştırılacak */}
      {/* <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Image
              className="image-upload"
              src="http://res.cloudinary.com/ddjzhbvp4/image/upload/v1628367278/aihp1s13zwryrrmupeuv.jpg"
              wrapped
              size="medium"
              circular
              onClick={() => imageRef.current.click()}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid> */}

      {/* <input
        ref={imageRef}
        type="file"
        id="profilepicture"
        className="input-file"
      /> */}
    </div>
  );
}
