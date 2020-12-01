import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadGames} from '../actions/gamesAction';
//Components
import Game from '../components/Game';

//Style and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadGames())
    }, [dispatch]);

    const {pupular, newGames, upcoming} = useSelector((state) => state.games)

    return (
        <GameList>
            <h1>Home</h1>
        </GameList>
    )
}

const GameList = styled(motion.div)`

`

export default Home
