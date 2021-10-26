import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import ViewArticle from "./pages/ViewArticle";
import Navbar from "./components/Navbar";
import SeePost from "./components/SeePost";

// import SimpleStorageContract from "./contracts/SimpleStorage.json";
// import TipCuratorsContract from "./contracts/Donation.json";
// import getWeb3 from "./getWeb3";

// import { create as ipfsHttpClient } from "ipfs-http-client";
// import { tipCuratorsAddress } from "./config/contractaddress";

// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

function App() {
  // const login = async () => {
  //   setLoginLoading(true);
  //   try {
  //     const web3 = await getWeb3();
  //     const accounts = await web3.eth.getAccounts();
  //     setAccount(accounts[0]);
  // const networkId = await web3.eth.net.getId();
  // const networkData = TipCuratorsContract.networks[networkId];
  // const tipCurators = new web3.eth.Contract(
  //   TipCuratorsContract.abi,
  //   // tipCuratorsAddress
  //   networkData.address
  // );
  // const testData = {
  //   title: "testing4",
  //   author: accounts[0],
  //   content: "Hello My Friend",
  // };

  // const goCreate = await tipCurators.methods.fetchAllPosts();
  // const res = await tipCurators.methods.fetchAllPosts().call();

  // console.log(res);

  // const data = JSON.stringify(testData);
  // const added = await client.add(data);
  // const url = `https://ipfs.infura.io/ipfs/${added.path}`;

  // const goCreate = await tipCurators.methods
  //   .createPost(url)
  //   .send({ from: accounts[0] });

  // console.log(goCreate);
  //   } catch (e) {
  //     console.log(e);
  //     window.alert(
  //       "Non-Ethereum browser detected. You should consider trying MetaMask!"
  //     );
  //   }
  // };

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/createpost" component={CreatePost} />
        <Route exact path="/view" component={ViewArticle} />
        <Route exact path="/seePost" component={SeePost} />
      </BrowserRouter>
    </div>
  );
}

export default App;
