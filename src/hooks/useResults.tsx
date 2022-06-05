import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState<{
    id: string,
    price: string,
    name: string,
    image_url: string,
    rating: string,
    review_count: string,
  }[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const searchApi = async (searchTerm: string) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  }

  useEffect(() => {
    searchApi('paste');
  }, []);

  return [searchApi, results, errorMessage] as const;
};
