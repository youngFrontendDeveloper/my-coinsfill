export const setAvatar = async(id, data, type) => {
  // const response = await fetch( "https://test-task.test211.workers.dev/account/image", {
  const response = await fetch( `http://my-coinsfill/wordpress/wp-json/wp/v2/media/`, {
    // method: "PUT",
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
      "Content-Type": type,
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      "Content-Disposition": 'attachment; filename="image.png"',

    },
    body: JSON.stringify(  data  )
  } );
  const result = await response.json();
  return result;
};