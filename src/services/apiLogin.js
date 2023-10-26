export const apiLogin =async(url, data)=>{
  try{
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.email,
        password: data.password,
      })
    });

    if(response.ok){
      const result = await response.json();
      console.log(result);
      localStorage.setItem("token", result.token)

      return result;
    }
  }catch(err){
    console.log(err);
  }
}


// export const apiLogin = async(url, data) => {
//   try {
//     const response = await fetch( url, {
//       method: "POST",
//       body: JSON.stringify( {
//         email: data.email,
//         password: data.password,
//       } )
//     } );
//
//     const result = await response.json();
//     console.log( result );
//
//     if( result.ok ) {
//       localStorage.setItem( "token", result.token );
//
//     }
//
//     return result;
//   } catch( err ) {
//     console.log( err );
//   }
//
// };