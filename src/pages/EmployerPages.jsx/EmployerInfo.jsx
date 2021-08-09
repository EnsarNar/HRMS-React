import React, { useRef } from "react";
import {
  Table,
  Icon,
  Container,
  Button,
  Image,
  Reveal,
  Grid,
} from "semantic-ui-react";
export default function EmployerInfo() {
  const imageRef = useRef();
  return (
    <div>
      <h1 className="opacity">Kişisel Bilgiler</h1>
      <Grid>
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
      </Grid>

      <input
        ref={imageRef}
        type="file"
        id="profilepicture"
        className="input-file"
      />

      <Container
        style={{ width: "85%", height: "60vh" }}
        className="margin-top"
      >
        <Table celled striped>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Icon name="mail" />
                Email
              </Table.Cell>
              <Table.Cell textAlign="center" disabled>
                {" "}
                xxx.hotmail.com
              </Table.Cell>
              <Table.Cell textAlign="right">
                <Button
                  style={{
                    padding: "7px 7px",
                    background: "linear-gradient(to right, #1d976c, #93f9b9)",
                  }}
                >
                  <Icon name="pencil" />
                  Düzenle
                </Button>
                <Button
                  style={{
                    padding: "7px 7px",
                    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                  }}
                >
                  <Icon name="trash" />
                  Sil
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name="phone" />
                Telefon
              </Table.Cell>
              <Table.Cell textAlign="center" disabled>
                {" "}
                +YY XXX XXX XXXX
              </Table.Cell>
              <Table.Cell textAlign="right">
                <Button
                  style={{
                    padding: "7px 7px",
                    background: "linear-gradient(to right, #1d976c, #93f9b9)",
                  }}
                >
                  <Icon name="pencil" />
                  Düzenle
                </Button>
                <Button
                  style={{
                    padding: "7px 7px",
                    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                  }}
                >
                  <Icon name="trash" />
                  Sil
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name="bolt" />
                Şifre
              </Table.Cell>
              <Table.Cell textAlign="center" disabled>
                {" "}
                +YY XXX XXX XXXX
              </Table.Cell>
              <Table.Cell textAlign="right">
                <Button
                  style={{
                    padding: "7px 7px",
                    background: "linear-gradient(to right, #1d976c, #93f9b9)",
                  }}
                >
                  <Icon name="pencil" />
                  Düzenle
                </Button>
                <Button
                  style={{
                    padding: "7px 7px",
                    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                  }}
                >
                  <Icon name="trash" />
                  Sil
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name="external alternate" />
                Web Adress
              </Table.Cell>
              <Table.Cell textAlign="center" disabled>
                {" "}
                +YY XXX XXX XXXX
              </Table.Cell>
              <Table.Cell textAlign="right">
                <Button
                  style={{
                    padding: "7px 7px",
                    background: "linear-gradient(to right, #1d976c, #93f9b9)",
                  }}
                >
                  <Icon name="pencil" />
                  Düzenle
                </Button>
                <Button
                  style={{
                    padding: "7px 7px",
                    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                  }}
                >
                  <Icon name="trash" />
                  Sil
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}
