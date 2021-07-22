import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  let jobAdvertisementService = new JobAdvertisementService();
  useEffect(() => {
    jobAdvertisementService
      .getJobAdvertisementsWhereIsNotActive()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  const handleClick = (id) => {
    jobAdvertisementService
      .changeIsActiveOfJobAdvertisement(id)
      .then(console.log("aktiflik durumu değiştirildi"))
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      {console.log(jobAdvertisements)}
      <Card.Group>
        {jobAdvertisements.map((advertisement) => (
          <Card key={advertisement.id}>
            <Card.Content>
              <Card.Header>{advertisement.employerCompanyName}</Card.Header>
              <Card.Meta>{advertisement.cityCityName}</Card.Meta>
              <Card.Description>
                Son Başvuru Tarihi: {advertisement.applicationDeadline}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Link to={`/candidate/getAllAdverts/${advertisement.id}`}>
                  <Button basic color="green">
                    Detaylar
                  </Button>
                </Link>
                <Button
                  onClick={() => handleClick(advertisement.id)}
                  type="submit"
                  basic
                  color="red"
                >
                  Bu İlanı Onayla.
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
