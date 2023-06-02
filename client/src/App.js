import abi from "./contract/chai.json";
import { useEffect, useState } from "react";
import {ethers} from "ethers";
import "./App.css";




function App(){

  const [state,setState] = useState({provider: null,signer:null,contract:null});
  
  useEffect(()=>{
    const connectWallete = async ()=>{
      const contractAddress = "0xf44e140d9c5c50ffdf504eb82ff5b3e9458927e5";
      const contractAbi = abi.abi;
      
      
      let {ethereum} = window;

      if(ethereum) {

        
        let provider = new ethers.providers.Web3Provider(ethereum);
        let signer = provider.getSigner();
        let contract = new ethers.Contract(contractAddress, contractAbi, signer);
        setState(provider,signer,contract);
    }
     
  }
 connectWallete();
},[])




  return
  (
    <>
      
    </>
  )
}
export default App;


