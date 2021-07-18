import React, { useState, useEffect } from "react";
import ResumeService from "../../services/resumeService";
import { Table, Button, Icon } from "semantic-ui-react";
export default function ResumeListForCandidates() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService
      .getResumes() //ileride getByCandidateId kullanılacak
      .then((result) => setResumes(result.data.data))
      .catch((err) => console.log(err.messaage));
  }, []);
  return (
    <div>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Resim</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Created At</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {resumes.map((resume) => (
            <Table.Row key={resume.id}>
              <Table.Cell>Resim</Table.Cell>
              <Table.Cell singleLine>{resume.candidateFirstName}</Table.Cell>
              <Table.Cell singleLine>{resume.candidateLastName}</Table.Cell>
              <Table.Cell singleLine>
                {resume.createdAt.slice(0, 10)}
              </Table.Cell>
              <Table.Cell singleLine>
                <Button color="green" animated="fade">
                  <Button.Content visible>Detaylar</Button.Content>
                  <Button.Content hidden>
                    <Icon name="mouse pointer" />
                  </Button.Content>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
          <Table.Row></Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
