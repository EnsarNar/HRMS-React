import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import {
  Button,
  Card,
  Grid,
  Pagination,
  Container,
  Dropdown,
  Icon,
  Step,
  Divider,
  Segment,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import Filter from "../../layout/Filter";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../../store/actions/favActions";

export default function JobAdvertisementList() {
  const dispatch = useDispatch();

  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const [pageSize, setPageSize] = useState(2);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  let filters = useSelector((state) => state.filterValues.filterValues);
  let favoriteItems = useSelector((state) => state.favorites.favoriteItems);
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
    toast.warning("İlan Yıldızlandı !");
  };
  const handleDeleteFromFavorites = (advertisement) => {
    dispatch(deleteFromFavorites(advertisement));
    toast.error("İlan Favorilerden Silindi !");
  };
  const handleChangePageSize = (value) => {
    // console.log(value);
    setPageSize(value);
  };
  const handlePageNo = (value) => {
    // console.log(value);
    setPageNo(value);
  };
  const handleFavoriteButton = (id) => {
    return favoriteItems.find((f) => f.jobAdvertisement.id === id)
      ? true
      : false;
  };

  //Pagination

  const pageOptions = [
    { key: "10", text: "10", value: "10" },
    { key: "20", text: "20", value: "20" },
    { key: "50", text: "50", value: "50" },
    { key: "100", text: "100", value: "100" },
    { key: "deneme", text: "2", value: "2" },
  ];
  const options = [
    { key: 1, text: "Choice 1", value: 1 },
    { key: 2, text: "Choice 2", value: 2 },
    { key: 3, text: "Choice 3", value: 3 },
  ];

  return (
    <div>
      {console.log(jobAdvertisements)}
      <div className="stp-container-design">
        <Step.Group attached="top">
          <Step>
            <Icon name=" clipboard list" />
            <Step.Content>
              <Step.Title>{totalPages} Tane Sayfa Getirildi</Step.Title>
            </Step.Content>
          </Step>

          <Step>
            <Icon name="clipboard list" />
            <Step.Content>
              <Step.Title>
                tek sayfada {pageSize} tane ilan getirildi
              </Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
      </div>

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
                    {/* <Link to={`/candidate/getAllAdverts/${advertisement.id}`}>  */}
                    <Button
                      inverted
                      color="green"
                      as={NavLink}
                      to={`/candidate/getAllAdverts/${advertisement.id}`}
                      icon
                    >
                      İlan Detayını Gör
                      <Icon name="paper plane" />
                    </Button>
                    {/* <Button
                      inverted
                      color="yellow"
                      onClick={() => {
                        handleAddToFavorites(advertisement);
                       
                      }}
                    >
                      Favorilere Ekle
                    </Button> */}

                    {handleFavoriteButton(advertisement.id) ? (
                      <Button
                        onClick={() => handleDeleteFromFavorites(advertisement)}
                        color="red"
                        inverted
                        icon
                      >
                        Favorilerden Kaldır
                        <Icon name="close" />
                      </Button>
                    ) : (
                      <Button
                        inverted
                        color="yellow"
                        onClick={() => handleAddToFavorites(advertisement)}
                        icon
                      >
                        Favorilere Ekle
                        <Icon name="check" />
                      </Button>
                    )}
                  </div>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>

        <Grid.Column width={6} floated="right">
          <Segment>
            <Dropdown
              text="Adverts Per Page"
              options={pageOptions}
              onChange={(e, data) => handleChangePageSize(data.value)}
              selection
              style={{ marginBottom: "0.6em" }}
            />
          </Segment>

          <Divider />
          <Filter />
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
