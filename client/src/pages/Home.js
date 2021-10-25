import React, { useEffect, useState } from "react";
import getWeb3 from "../getWeb3";
import TipCuratorsContract from "../contracts/Donation.json";
import ReactMarkdown from "react-markdown";
import axios from "axios";

function Home() {
  const [web3State, setWeb3State] = useState(null);
  const [posts, setPosts] = useState([]);

  const loadAllBlogs = async web3 => {
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const networkData = TipCuratorsContract.networks[networkId];

    const tipCurators = new web3.eth.Contract(
      TipCuratorsContract.abi,
      networkData.address
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
      {posts?.map(post => {
        return (
          <div key={post.id}>
            <h1> {post.title}</h1>
            <ReactMarkdown children={post.body} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
