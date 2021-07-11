import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import {
  Button,
  Card,
  Grid,
  Pagination,
  Container,
  Form,
  Dropdown,
} from "semantic-ui-react";
import Filter from "../../layout/Filter";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../../store/actions/favActions";

export default function JobAdvertisementList() {
  const dispatch = useDispatch();
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const [pageSize, setPageSize] = useState(2);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  let filters = useSelector((state) => state.filterValues.filterValues);
  // let pageNo = 2;
  // let pageSize = 1;

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByFilterWithPages(pageNo, pageSize, filters) // filterlı metod yazılacak buraya parametre olarak filters geiçlecek
      .then((result) => {
        setJobAdvertisements(result.data.data.content);
        setTotalPages(result.data.data.totalPages);
      });
  }, [filters, pageNo, pageSize]);

  //UseEffect changebox degistiginde 2. kez calısmıyor
  const handleAddToFavorites = (advertisement) => {
    dispatch(addToFavorites(advertisement));
    console.log(advertisement);
  };
  const handleChangePageSize = (value) => {
    console.log(value);
    setPageSize(value);
  };
  const handlePageNo = (value) => {
    console.log(value);
    setPageNo(value);
  };
  //Pagination

  const pageOptions = [
    { key: "10", text: "10", value: "10" },
    { key: "20", text: "20", value: "20" },
    { key: "50", text: "50", value: "50" },
    { key: "100", text: "100", value: "100" },
    { key: "deneme", text: "2", value: "2" },
  ];
  return (
    <div>
      {/* {console.log(filters)} */}
      <Grid container stackable>
        <Grid.Column width={10}>
          <Card.Group style={{ paddingLeft: "6.5em" }}>
            {jobAdvertisements.map((advertisement) => (
              <Card key={advertisement.id}>
                <Card.Content>
                  <Card.Header>
                    {advertisement.employer.companyName}
                  </Card.Header>
                  <Card.Meta>{advertisement.city.cityName}</Card.Meta>
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

          <Dropdown
            options={pageOptions}
            onChange={(e, data) => handleChangePageSize(data.value)}
            selection
            placeholder="Adverts per page"
          />
        </Grid.Column>
      </Grid>
      <Container style={{ paddingRight: "20em" }}>
        <Pagination
          onPageChange={(e, { activePage }) => handlePageNo(activePage)}
          defaultActivePage={1}
          totalPages={totalPages}
        />
      </Container>
    </div>
  );
}
