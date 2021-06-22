import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MdSearch } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
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
  price?: string;
  id?: string;
}

const Store: React.FC = () => {
  // CONSTS
  const history = useHistory();
  const sizeOptions = [41, 42, 43, 44];
  const quantityOptions = [1, 2, 3, 4];

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
    <Layout title="Sneakers">
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
              const { thumbnailURL, description, price, id } = sneaker;

              return (
                <StoreItem>
                  <img src={thumbnailURL} alt={description} />
                  <ItemInfo>
                    <h3>{description}</h3>
                    <ItemOptions>
                      <div>
                        <p>Size</p>
                        <select>
                          {sizeOptions.map((size) => (
                            <option>{size}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <p>Quantity</p>
                        <select>
                          {quantityOptions.map((quantity) => (
                            <option>{quantity}</option>
                          ))}
                        </select>
                      </div>
                    </ItemOptions>
                    <div className="price">{`$ ${price}`}</div>
                    <button
                      type="button"
                      onClick={() => history.push(`/checkout`)}
                    >
                      Add to cart
                    </button>
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
