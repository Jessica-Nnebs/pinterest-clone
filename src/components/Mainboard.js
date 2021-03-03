import React from 'react';
import styled from 'styled-components';
import Pin from './Pin';

function Mainboard(props) {

    let { pins } = props;
    
    return (
        <Wrapper>
            <Container>
                {pins.map((pin, index) => {
                    let {urls} = pin;
                  return  <Pin key={index} urls={urls} />
                })}
                
            </Container>
        </Wrapper>
    )
}

export default Mainboard



const Wrapper = styled.div`
    margin-left: 5rem;
    background-color: white;
    display: inline-flex;
    justify-content: center;
    height: 96vh;
    width: 100%;
    margin-top: 5px;


` 

const Container = styled.div`
    max-width: 3780px;
    column-count: 6;
    column-gap: 10px;
    margin-left: 15rem;
    height: 96vh;
    background-color: white;

    
` 
