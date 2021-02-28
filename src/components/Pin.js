import React, { props} from 'react'
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
    display: inline-flex;
    padding: 8px;
   
 
` 
const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;

    img{
        display: flex;
        height: 100%;
        width: 100%;
        cursor: zoom-in;
        border-radius: 16px;
        object-fit: cover;

    }
 
    
 
` 