// let IS_PROD = true;
// const server = IS_PROD ?
    
//     "https://soul-connect.onrender.com":

//     "http://localhost:8000"


// export default server;







const server = process.env.REACT_APP_SERVER_URL;
export default server;


