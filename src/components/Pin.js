import React from 'react';
import styled from 'styled-components';

function Pin(props) {

    let {urls} = props;
    
    return (
        <Wrapper>
            <Container>
                <img src={urls.regular} alt="pin"/>
            </Container>
        </Wrapper>
    )
}

export default Pin


const Wrapper = styled.div`
    display: flex;
    padding: 8px;
   
 
` 
const Container = styled.div`
    display: inline-flex;
    box-sizing: border-box;
    width: 236px;

    img{
        display: flex;
        height: 100%;
        width: 100%;
        border-radius: 16px;
        object-fit: cover;
        background-size: 100%;
        background-position: center;
        transition: 1s;
        cursor: zoom-in;

    }

    img > hover {
        background-size: 120%;
        background-position: center;

    }
 
    
 
` 