import logo from './logo.svg';
import './App.css';
import Nav from './layouts/Nav.js';
import Footer from './layouts/Footer';
import Card from './layouts/Card';
import DieuhuongURL from './routers/DieuhuongURL.js'
import axios from 'axios';
function App() {
  var axios = require('axios');

  var config = {
  method: 'get',
  url: 'https://oauth.hanet.com/oauth2/authorize?response_type=code&client_id=332054e2244cd233ebf1f4a15a620e61&redirect_uri=https://localhost:3000/callback?code=AUTHORIZATION_CODE&scope=full',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
var qs = require('qs');
var data = qs.stringify({
  'code': '<CODE>',
  'grant_type': 'authorization_code',
  'client_id': '<CLIENT_ID>',
  'redirect_uri': '<HTTP_CALLBACK_URL>',
  'client_secret': '<CLIENT_SECRET>' 
});
var config = {
  method: 'post',
  url: 'https://oauth.hanet.com/token',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
  return (
    <div className="App">
      <div className="App">
      <Nav></Nav>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <DieuhuongURL/>
      <br/>
      <Footer></Footer>
      
    </div>
      
    </div>
  );
}

export default App;
