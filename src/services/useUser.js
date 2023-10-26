import useSWR from "swr";

const fetcher = (url, login) => fetch( url, {headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }} ).then( res => res.json() );

export function useUser(login) {
  // const { data, error, isLoading } = useSWR( "http://my-coinsfill/wordpress/wp/v2/users/me",
  const { data, error, isLoading } = useSWR( `http://my-coinsfill/wordpress/wp/v2/users/?search=${login}`,
    fetcher );

  console.log("user in useUser: " + JSON.stringify(data));

  return {
    user: data,
    isLoading,
    isError: error
  };

}