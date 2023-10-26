export const getAvatar = async(id) => {
  // const response = await fetch( "https://test-task.test211.workers.dev/account/image", {
  const response = await fetch( `http://my-coinsfill/wordpress/wp-json/wp/v2/media/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "token-tt": localStorage.getItem( "token" ),
    },
  } );
  const result = await response.json();

  return result;
};