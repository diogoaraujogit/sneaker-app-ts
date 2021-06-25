import React, { useEffect, useState, useContext } from 'react';
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

import { CartContext } from '../../context/CartContext';

interface SneakerProps {
  description?: string;
  thumbnailURL?: string;
  price?: string;
  id?: string;
}

const Store: React.FC = () => {
  // CONSTS
  const history = useHistory();
  const sizeOptions = ['41', '42', '43', '44'];
  const quantityOptions = ['1', '2', '3', '4'];

  const { updateCartItem } = useContext(CartContext);

  // PAGE INNER STATES
  const [allSneakers, setAllSneakers] = useState<SneakerProps[]>([]);
  const [sneakersList, setSneakersList] = useState<SneakerProps[]>([]);
  // const [pageMessage, setPageMessage] = useState('');
  // const [pageLoading, setPageLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [size, setSize] = useState('41');
  const [quantity, setQuantity] = useState('1');

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

  const handleAddToCart = (sneaker: SneakerProps): void => {
    updateCartItem({ ...sneaker, quantity, size });
    history.push(`/checkout`);
  };

  // PAGE SIDE EFFECTS
  useEffect(() => {
    getSneakers();
  }, []);

  useEffect(() => {
    filterItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              const { thumbnailURL, description, price } = sneaker;

              return (
                <StoreItem>
                  <img src={thumbnailURL} alt={description} />
                  <ItemInfo>
                    <h3>{description}</h3>
                    <ItemOptions>
                      <div>
                        <p>Size</p>
                        <select onChange={(e) => setSize(e.target.value)}>
                          {sizeOptions.map((sizeOption) => (
                            <option value={sizeOption}>{sizeOption}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <p>Quantity</p>
                        <select onChange={(e) => setQuantity(e.target.value)}>
                          {quantityOptions.map((quantityOption) => (
                            <option value={quantityOption}>
                              {quantityOption}
                            </option>
                          ))}
                        </select>
                      </div>
                    </ItemOptions>
                    <div className="price">{`$ ${price}`}</div>
                    <button
                      type="button"
                      onClick={() => handleAddToCart(sneaker)}
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
