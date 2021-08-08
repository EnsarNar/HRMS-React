import React, { useState, useEffect } from "react";
import ResumeService from "../../services/resumeService";
import { Table, Button, Icon, Image, Segment } from "semantic-ui-react";
import SingleResumeForCandidate from "./SingleResumeForCandidate";

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
      {resumes.length === 0 ? (
        <div>
          <h1 style={{ opacity: "0.5" }}>OOPS !</h1>
          <h2 style={{ opacity: "0.5" }}>There isn't any resume :( </h2>
          {/* Yukarıdaki parantez üzgün suratın ağtı kafalar karışmasın :D */}
        </div>
      ) : (
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
                <Table.Cell>
                  <Image size="mini" src={resume.profilePictureUrl} avatar />
                </Table.Cell>
                <Table.Cell singleLine>{resume.candidateFirstName}</Table.Cell>
                <Table.Cell singleLine>{resume.candidateLastName}</Table.Cell>
                <Table.Cell singleLine>
                  {resume.createdAt.slice(0, 10)}
                </Table.Cell>
                <Table.Cell singleLine>
                  <SingleResumeForCandidate id={resume.id} />
                </Table.Cell>
              </Table.Row>
            ))}
            <Table.Row></Table.Row>
          </Table.Body>
        </Table>
      )}
    </div>
  );
}
