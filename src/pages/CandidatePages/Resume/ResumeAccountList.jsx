import React, { useState, useEffect } from "react";
import ResumeAccountService from "../../../services/resumeAccountService";
import {
  Grid,
  Segment,
  Label,
  Divider,
  Icon,
  Popup,
  Button,
} from "semantic-ui-react";
export default function ResumeAccountList({ id }) {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    let resumeAccountService = new ResumeAccountService();
    resumeAccountService
      .getByResumeId(id)
      .then((result) => setAccounts(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <Grid columns="equal" divided>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Divider />
            <h3>Hesaplar</h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={3}>
        <Grid.Row>
          {accounts.map((account) => (
            <Grid.Column key={account.id} textAlign="center">
              <Button color="black" target="_blank" href={account.github}>
                <Icon name="github" />
                GitHub
              </Button>
              <Button color="linkedin" target="_blank" href={account.linkedin}>
                <Icon name="linkedin" />
                Linkedin
              </Button>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
