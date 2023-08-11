/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { onValue, ref } from "firebase/database";
import CoverVideo from "../CoverVideo";
import TypeWriterText from "../TypeWriterText";

import img1 from "../../assets/Nfts/bighead.svg";
import img2 from "../../assets/Nfts/bighead-1.svg";
import img3 from "../../assets/Nfts/bighead-2.svg";
import img4 from "../../assets/Nfts/bighead-3.svg";
import img5 from "../../assets/Nfts/bighead-4.svg";
import img6 from "../../assets/Nfts/bighead-5.svg";
import img7 from "../../assets/Nfts/bighead-6.svg";
import img8 from "../../assets/Nfts/bighead-7.svg";
import img9 from "../../assets/Nfts/bighead-8.svg";
import img10 from "../../assets/Nfts/bighead-9.svg";
import ETH from "../../assets/icons8-ethereum-48.png";
import COOKIE from "../../assets/cookie.png";
import TOTAL from "../../assets/total_cooke_box.png";
import { ethers } from "ethers";
import faveNFT from "./FaveNFT.json";

import firestore from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  updateDoc,
  addDoc,
  getDocs,
  onSnapshot
} from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";

const ImgContainer = styled.div`
  width: 100%;
  margin-top: 90px;

  video {
    width: 100%;
    height: 20%;
  }

  @meda (max-width: 64em) {
    min-width: 40vh;
  }
`;

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
  margin-top: 50px;
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  // background-color: lightblue;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }

  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;

    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
100%{
  transform: rotate(1turn);
}
`;

const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }

  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }

  @media (max-width: 48em) {
    right: 1rem;
  }
`;

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxl};

  @media (max-width: 64em) {
    width: 2rem;
    height: 2rem;
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: white;
  font-weight: 600;
  width: 80%;
  align-items: flex-start;
  margin-top: -60px;
  margin-left: 60px;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const Btn = styled.button`
display: inline-block;
background-color: white;
outline: none;
border: none;
}`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    /* 1024px */
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(2px);
    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;

    touch-action: none;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;

const Showcase = ({ accounts, setAccounts }) => {
  const [counter, setCounter] = useState(0);
  const [hits, setHits] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  const [tokenBalance, setTokenBalance] = useState(0);

  const fetchDocs = async () => {
    const docRef = doc(firestore, "button-data", "button-object");
    const collectionRef = collection(docRef, "users");

    onSnapshot(collectionRef, (querySnapshot) => {
      if (!querySnapshot.empty) {
        // console.log(querySnapshot);
        setCounter(querySnapshot.size);
      } else {
        console.log("No documents found!");
        setCounter(0);
      }
    });
  };

  // const [def, setDef] = useState([fetchDocs()]);

  useEffect(() => {
    // Get the current hit count from Firestore on component mount

    fetchDocs();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(
        collection(firestore, "button-data", "button-object", "users"),
        {
          identity: "user wallet address"
        }
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setCounter(counter + 1);
    console.log("The link was clicked.");
    setShowAnimation(true);

    // Clear animation after a short delay
    setTimeout(() => {
      setShowAnimation(false);
    }, 1000);
  };

  const askContractToClaim = async () => {
    const CONTRACT_ADDRESS = "0xc851e96cD787D998C633dA187524Dd32Af4C5dbd";

    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          faveNFT.abi,
          signer
        );

        // Get the balance of the connected wallet's address
        const cookieToken = new ethers.Contract(faveNFT.abi, CONTRACT_ADDRESS);
        const balance = await cookieToken.methods.balanceOf(accounts[0]).call();
        setTokenBalance(balance);

        console.log("Going to pop wallet now to pay gas...");
        let claimtoken = await connectedContract.claimTokens();

        console.log("Claiming...please wait.");
        await claimtoken.wait();

        console.log(
          `Mined, see transaction: https://sepolia.etherscan.io/tx/${claimtoken.hash}`
        );
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section id="home">
      <Container>
        {/* {tokenBalance >= '5000000000000000000000' ? ( */}
        <div>
          <p>Has Enough Tokens: Yes</p>
          <Box>
            <Btn onClick={handleClick}>
              <img src={TOTAL} width={500} />
              <SubTitle>:{counter}</SubTitle>
              <ImgContainer>
                <img src={COOKIE} width={500} />
              </ImgContainer>
            </Btn>
            <Btn onClick={askContractToClaim}>Claim</Btn>
            {showAnimation && (
              <div className="animation">
                <p>+1</p>
              </div>
            )}
          </Box>
        </div>
        {/* ) : ( */}
        {/* <div>
            <p>Not Up To 5000 $COOKE</p>
          </div>
        )} */}
      </Container>
      <Menu>
        <MenuItem>
          <a href="https://t.me/CookeClicker">Telegram</a>
        </MenuItem>
        <MenuItem>
          <a href="https://twitter.com/CookeClicker">Twitter</a>
        </MenuItem>
        <MenuItem>
          <a href="">Dextools</a>
        </MenuItem>
      </Menu>
    </Section>
  );
};

export default Showcase;
