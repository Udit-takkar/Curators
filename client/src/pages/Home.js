import React, { useEffect, useState } from "react";
import getWeb3 from "../getWeb3";
import TipCuratorsContract from "../contracts/Donation.json";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import MoneyJar from "../svg/money-jar.svg";
import Polygon from "../svg/polygon.png";
import PostOverview from "../components/PostOverview";


function Home() {
  const [web3State, setWeb3State] = useState(null);
  const [posts, setPosts] = useState([]);

  const loadAllBlogs = async web3 => {
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    localStorage.setItem('currentUser',JSON.stringify(accounts[0]));
    
    const networkData = TipCuratorsContract.networks[networkId];

    const tipCurators = new web3.eth.Contract(
      TipCuratorsContract.abi,
      "0xbcf39c8908C6320bd2984a670de07A581ff14c87"
    );

    const data = await tipCurators.methods.fetchAllPosts().call();

    const items = await Promise.all(
      data?.map(async i => {
        const postURI = i.postURI;
        const meta = await axios.get(postURI);
        console.log(meta);
        let item = {
          title: meta.data.title,
          body: meta.data.body,
          author: i.author,
          id: i.postid,
        };
        return item;
      })
    );
    setPosts(items);
  };

  useEffect(() => {
    const setWeb3 = async () => {
      const web3 = await getWeb3();
      setWeb3State(web3);
      await loadAllBlogs(web3);
    };
    setWeb3();
  }, []);
  return (
    <div>
      <div className="flex-container container1 shadow-lg">
        <img  style={{"height": '290px'}} src={MoneyJar} alt="React Logo" />
        <div style={{marginTop :'80px', 'marginLeft':"50%"}}><img  className="mr-0" style={{"height": '100px'}} src={Polygon} alt="Polygon Matic" /></div>
      </div>
      <p className="mt-5" style={{marginLeft:'70px', width:"60vw"}}><b>Global Feed</b><hr /></p>
      
      {posts?.map(post => {
        return (
          <PostOverview key={post.id} title={post.title} body={post.body} author={post.author} />
       );
      })}
    </div>
  );
}

export default Home;
