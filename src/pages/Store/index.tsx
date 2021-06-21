import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';
import apiSneakers from '../../services/apiSneakers';
import { Container, Sneaker } from './styles';

const Store: React.FC = () => {
  // PAGE INNER STATES
  const [allSneakers, setAllSneakers] = useState([]);
  // const [sneakersList, setSneakersList] = useState([]);
  // const [pageMessage, setPageMessage] = useState('');
  // const [pageLoading, setPageLoading] = useState(true);

  // ASYNC FUNCTIONS
  const getSneakers = async (): Promise<void> => {
    try {
      const response = await apiSneakers.get('');

      if (response?.data?.results) {
        setAllSneakers(response.data.results);
      }
    } catch (e) {
      toast.error('Sneakers Error');
    }
  };

  // PAGE SIDE EFFECTS
  useEffect(() => {
    getSneakers();
  }, []);

  return (
    <Layout title="SNEAKERS">
      <Container>
        {allSneakers.map((sneaker) => {
          const { thumbnailURL, description } = sneaker;

          return (
            <Sneaker>
              <img src={thumbnailURL} alt={description} />
              <h3>{description}</h3>
            </Sneaker>
          );
        })}
      </Container>
    </Layout>
  );
};

export default Store;
