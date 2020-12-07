import React, {useState} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../img/logo.svg';

//Redux and Routes
import  {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';

//Animations
import {FadeIn} from '../animations';

const Nav = () => {

    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState();

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput('');
    }

    const clearSearched = () => {
        dispatch({
            type: 'CLEAR_SEARCHED'
        })
    }
    
    return (
        <div>
            <StyledNav variants={FadeIn} initial='hidden' animate='show' >
                <Logo onClick={clearSearched}>
                  <img src={logo} alt="ignite" />
                  <h1>Ignite</h1>
                </Logo>
                <form onSubmit={submitSearch} action='#' className="search">
                    <input value={textInput} onChange={inputHandler} type="text"/>
                    <button type='submit'>Search</button>
                </form>
            </StyledNav>
        </div>
    )
}


const StyledNav = styled(motion.nav)`
   padding: 3rem 5rem;
   text-align: center;
   input{
       width: 30%;
       font-size: 1.5rem;
       padding: 0.5rem;
       border: none;
       margin-top: 1rem;
       box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
       font-weight: bold;
       font-family: "Montserrat", sans-serif;
   }
   button{
       font-size: 1.5rem;
       padding: 0.5rem 2rem;
       cursor: pointer;
       background: white;
       outline: none;
       color: #ff7676;
       margin-left: 1rem;
       border-radius: 0.2rem;
       border: 3px solid #ff7676;
       transition: all 0.3s ease-in-out;
       &:hover{
           background: #ff7676;
           color: white;
       }

   }

`

const Logo = styled(motion.div)`
   display: flex;
   justify-content: center;
   padding: 1rem;
   cursor: pointer;
   img{
       width: 2rem;
       height: 2rem;
   }

`

export default Nav;
