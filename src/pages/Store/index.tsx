import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MdSearch } from 'react-icons/md';
import Layout from '../../components/Layout';
import apiSneakers from '../../services/apiSneakers';
import {
  Container,
  Content,
  ItemInfo,
  ItemOptions,
  SearchItem,
  StoreItem,
  StoreList,
} from './styles';

interface SneakerProps {
  description?: string;
  thumbnailURL?: string;
}

const Store: React.FC = () => {
  // PAGE INNER STATES
  const [allSneakers, setAllSneakers] = useState<SneakerProps[]>([]);
  const [sneakersList, setSneakersList] = useState<SneakerProps[]>([]);
  // const [pageMessage, setPageMessage] = useState('');
  // const [pageLoading, setPageLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // ASYNC FUNCTIONS
  const getSneakers = async (): Promise<void> => {
    try {
      const response = await apiSneakers.get('');

      if (response?.data?.results) {
        setAllSneakers(response.data.results);
        setSneakersList(response.data.results);
      }
    } catch (e) {
      toast.error('Sneakers Error');
    }
  };

  const filterItems = (): void => {
    const filteredItems = allSneakers.filter((sneaker) =>
      sneaker?.description?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setSneakersList(filteredItems);
  };

  // PAGE SIDE EFFECTS
  useEffect(() => {
    getSneakers();
  }, []);

  useEffect(() => {
    filterItems();
  }, [searchTerm]);

  return (
    <Layout title="Sneakers" hasBackButton>
      <Container>
        <Content>
          <SearchItem>
            <MdSearch />
            <input
              placeholder="Search for your sneaker"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchItem>
          <StoreList>
            {sneakersList.map((sneaker) => {
              const { thumbnailURL, description } = sneaker;

              return (
                <StoreItem>
                  <img src={thumbnailURL} alt={description} />
                  <ItemInfo>
                    <h3>{description}</h3>
                    <ItemOptions>
                      <div>
                        <p>Size</p>
                        <select>
                          <option>41</option>
                        </select>
                      </div>
                    </ItemOptions>
                  </ItemInfo>
                </StoreItem>
              );
            })}
          </StoreList>
        </Content>
      </Container>
    </Layout>
  );
};

export default Store;
