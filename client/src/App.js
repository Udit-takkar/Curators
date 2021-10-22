import React, { useState , useEffect} from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import SimpleStorage from './contracts/SimpleStorage.json';
import Web3 from 'web3';

import "./App.css";

function App(){

  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState("");

  useEffect(() => {
    async function login() {
      await loadWeb3();
      await loadBlockchainData();
    }

    login();
    
  }, [])
  

  // async componentWillMount(){
  //   await this.loadWeb3()
  //   await this.loadBlockchainData()
  // }
 
  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async function loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    // this.setState({ account: accounts[0]})
    setAccount(account[0]);
    const networkId = await web3.eth.net.getId()
    const networkData = SimpleStorage.networks[networkId]
    if(networkData){
      setLoading(false)
    } else{
      window.alert('SimpleStorage contract not deployed to detected network.')
    }
  }

  // async function login() {
  //     await loadWeb3()
  //     await loadBlockchainData()
  // }


  
      return (
        
        <div>
          {/* <button onClick={() => {login()}}>Login</button> */}
          {
            loading
            ?
            (<div id="loader" className="text-center mt-5"><p>Loading...</p></div>)
            :
            (<h1>Hello World</h1>)
          }
        </div>
      );
  
}

export default App;
