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
import { unstable_concurrentAct } from "react-dom/cjs/react-dom-test-utils.production.min";
import UpdateResumeAccountModal from "./update/UpdateResumeAccountModal";
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

      {accounts.map((account) => (
        <Grid columns="equal" key={account.id}>
          <Button color="red" style={{ padding: "7px 7px" }}>
            <Icon name="trash" />
            Sil
          </Button>
          <UpdateResumeAccountModal
            resumeId={account.resumeId}
            account={account}
          />
          <Grid.Row>
            {account.github ? (
              <Grid.Column textAlign="center">
                <Button
                  color="black"
                  target="_blank"
                  href={account.github}
                  fluid
                >
                  <Icon name="github" />
                  Github
                </Button>
              </Grid.Column>
            ) : null}
            {account.linkedin ? (
              <Grid.Column textAlign="center">
                <Button
                  color="linkedin"
                  target="_blank"
                  href={account.linkedin}
                  fluid
                >
                  <Icon name="linkedin" />
                  Linkedin
                </Button>
              </Grid.Column>
            ) : null}

            {/* Yen bir şey eklenecegi zaman grid.column ekle yeni bir tane */}
          </Grid.Row>
          <Divider />
        </Grid>
      ))}
    </div>
  );
}
