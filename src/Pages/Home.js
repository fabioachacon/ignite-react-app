import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadGames} from '../actions/gamesAction';

//Components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';

//Style and Animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import {useLocation} from 'react-router-dom';

//Animations
import { FadeIn, PopUp } from '../animations';

const Home = () => {
    
    //get the current location
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    console.log(location.pathname.split('/')[2]);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadGames())
    }, [dispatch]);

    const {popular, newGames, upcoming, searched} = useSelector((state) => state.games);
    return (
    <GameList variants={FadeIn} initial='hidden' animate='show'>
        <AnimateSharedLayout type='crossfade'>
            <AnimatePresence>
              { pathId && (<GameDetail pathId={pathId} />)}
            </AnimatePresence>
         { searched.length ?  
         (<div className="search">
            <h2>Search Results</h2>
            <Games>
                {searched.map((game, i) => (
                     <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        image={game.background_image}
                        key={i}
                    />
                ))
            }
            </Games> 
        </div>
        ) : ''}
            <h2>Upcoming Games</h2>
            <Games>
               {upcoming && (
                   upcoming.map((game, i) => (
                       <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        image={game.background_image}
                        key={i}
                    />
                ))
            )}
            </Games>
            <h2>Popular Games</h2>
            <Games>
               {popular && (
                  popular.map((game, i) => (
                       <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        image={game.background_image}
                        key={i}
                    />
                ))
            )}
            </Games>
            <h2>New Games</h2>
            <Games>
               {newGames && (
                   newGames.map((game, i) => (
                       <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        image={game.background_image}
                        key={i}
                    />
                ))
            )}
            </Games>
        </AnimateSharedLayout>    
    </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
`;

const Games = styled(motion.div)`
   min-height: 80vh;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   grid-column-gap: 3rem;
   grid-row-gap: 5rem;
`;


export default Home
