import React, { useEffect, useState } from "react";
import styled from "styled-components";
import background from "./../images/requirements.png";
import axios from "axios";

function ListPlayer() {
  const [players, setPlayers] = useState([{}]);

  const getDataPlayer = async () => {
    const { data } = await axios.get("http://localhost:4000/user_game");
    const fetchdata = data;
    setPlayers(fetchdata);
  };
  useEffect(() => {
    getDataPlayer();
  }, []);
  return (
    <Wrapper>
      {players.map((item) => {
        return (
          <Card>
            <div key={item.id}>
              <div>{item.username}</div>
              <div>{item.password}</div>
            </div>
          </Card>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(
      0deg,
      rgba(8, 9, 10, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${background}) no-repeat center center / cover;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Card = styled.div`
  padding: 2rem;
  background-color: white;
  width: 5rem;
  height: 2rem;
`;

export default ListPlayer;
