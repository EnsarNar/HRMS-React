import React, { useState, useEffect } from "react";
import ResumeService from "../services/resumeService";
import { Table, Button } from "semantic-ui-react";

export default function ResumeList() {
  const [resumes, setResumes] = useState([]);
  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService.getResumes().then((result) => setResumes(result.data.data));
  }, []);

  return (
    <div>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Picture</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Cover Letter</Table.HeaderCell>
            {/* Detaylar kısmı yazılacak buraya */}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {resumes.map((resume) => (
            <Table.Row key={resume.id}>
              <Table.Cell>{resume.profilePictureUrl}</Table.Cell>
              <Table.Cell>{resume.candidateFirstName}</Table.Cell>
              <Table.Cell>{resume.candidateLastName}</Table.Cell>
              <Table.Cell>{resume.coverLetter}</Table.Cell>
              <Table.Cell>
                <Button>Detaylar</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
