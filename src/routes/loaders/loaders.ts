import axios from 'axios';

export type UsersType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type LoadUsersType = {
  users: UsersType[];
};

export const getLoadUsers = async (url: string): Promise<LoadUsersType> => {
  const { data } = await axios.get<Array<UsersType>>(url);

  return { users: data };
};
