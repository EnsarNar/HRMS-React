import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { Button, Card, Grid } from "semantic-ui-react";
import Filter from "../../layout/Filter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../../store/actions/favActions";
import { useSelector } from "react-redux";
export default function JobAdvertisementList() {
  const dispatch = useDispatch();
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const filters = useSelector((state) => state.filterValues.filterValues);
  let pageNo = 1;
  let pageSize = 5; //İleride Düzeltilecek
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisementsWhereFiltered(pageNo, pageSize, filters) // filterlı metod yazılacak buraya parametre olarak filters geiçlecek
      .then((result) => setJobAdvertisements(result.data.data));
  }, [pageNo, pageSize, filters]);
  const handleAddToFavorites = (advertisement) => {
    dispatch(addToFavorites(advertisement));
    console.log(advertisement);
  };
  return (
    <div>
      <Grid container stackable>
        <Grid.Column width={10}>
          <Card.Group style={{ paddingLeft: "6.5em" }}>
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
                      basic
                      color="yellow"
                      onClick={() => handleAddToFavorites(advertisement)}
                    >
                      Yıldızla
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>

        <Grid.Column width={6} floated="right">
          <Filter />
        </Grid.Column>
      </Grid>
    </div>
  );
}
