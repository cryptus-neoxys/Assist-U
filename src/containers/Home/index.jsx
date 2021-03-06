import React, { useState } from "react";
// import { Button, Box } from "@material-ui/core";
import { HomeWrapper } from "./style";

import { GameNav } from "./../../components/GameNav/GameNav";
import { Expression } from "./../../components/Expression/Expression";
import { Time } from "./../../components/Time/Time";
import { Money } from "./../../components/Money/Money";
import { Videos } from "./../../components/Videos/Videos";

export const Home = () => {
  const [game, changeGame] = useState(0);

  const changeGameHandler = (data) => {
    changeGame(data);
  };

  const gameRender = () => {
    switch (game) {
      case 1:
        return <Expression />;
      case 2:
        return <Time />;
      case 3:
        return <Money />;
      case 4:
        return <Videos />;
      default:
        return null;
    }
  };

  return (
    <div>
      <HomeWrapper>
        <h1 className='heading'>Assist-U</h1>
        {game === 0 ? (
          <GameNav changeGameHandler={changeGameHandler} />
        ) : (
          <button
            className='back-button'
            onClick={() => {
              changeGameHandler(0);
            }}>
            <span className='fa fa-arrow-left nav-icon'></span> BACK
          </button>
        )}
        {gameRender()}
      </HomeWrapper>
    </div>
  );
};

export default Home;
