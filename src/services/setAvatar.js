export const setAvatar = async( data, type) => {
  const response = await fetch( "https://test-task.test211.workers.dev/account/image", {
    method: "PUT",
    headers: {
      "Content-Type": type,
      "token-tt": localStorage.getItem( "token" ),

    },
    body: JSON.stringify(  {image:data}  )
  } );
  const result = await response.json();
  return result;
};