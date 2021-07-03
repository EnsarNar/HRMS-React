import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import CandidateService from "../../services/candidateService";

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
  }, []);

  return (
    <div>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Identity Number</Table.HeaderCell>
            <Table.HeaderCell>Password</Table.HeaderCell>
            <Table.HeaderCell>Birth Date</Table.HeaderCell>
            {/* Detaylar kısmı yazılacak buraya */}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>{product.firstName}</Table.Cell>
              <Table.Cell>{product.lastName}</Table.Cell>
              <Table.Cell>{product.email}</Table.Cell>
              <Table.Cell>{product.identityNumber}</Table.Cell>
              <Table.Cell>{product.password}</Table.Cell>
              <Table.Cell>{product.birthDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
