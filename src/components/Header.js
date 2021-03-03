import React, { useState } from "react";
import styled from "styled-components";
import PinterestIcon from "@material-ui/icons/Pinterest";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/Notifications";
import TextsmsIcon from "@material-ui/icons/Textsms";
import FaceIcon from "@material-ui/icons/Face";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

function Header(props) {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("false");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(input);
   
  };

  const expandSearch = () => {
    setSearch(!search);
  };


  return (
    <HeaderWrapper>
      <Wrapper>
        <LogoWrapper>
          <IconButton>
            <PinterestIcon href="/" />
          </IconButton>
        </LogoWrapper>

        <div className="searcharea">
          <IconButton>
            <SearchIcon onClick={expandSearch} />
          </IconButton>
          <form>
            <input
              class={search ? "search__input" : "active"}
              type="text"
              placeholder="Search..."
              onChange={(e) => setInput(e.target.value)}
            />
            <button class="btn" type="submit" onClick={onSearchSubmit}>
              Submit
            </button>
          </form>
        </div>

        <IconButton>
          <HomeIcon href="/" />
        </IconButton>
        <IconButton>
          <PersonAddIcon />
        </IconButton>

        <IconButton>
          <NotificationIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </Wrapper>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  margin: 0;
  height: 100%;
  padding-left: 4px;
  width: 5rem;
  background-color: #f6f6f6;
  position: fixed;
`;

const Wrapper = styled.div`
  background-color: #f6f6f6;
  margin-top: 2rem;
  margin-bottom: 5rem;
  margin-left: 0.8rem;

  .searcharea {
    display: flex;
  }

  .search__input {
    visibility: hidden;
  }

  .active {
    outline: none;
    border: 0.5px solid gray;
    background-color: #fff;
    position: absolute;
    left: 1;
    padding: 15px 50px;
    z-index: 1;
    border-radius: 40px;
    transition: 0.1s ease-in;
    width: 300%;
  }

  .MuiIconButton-root {
    z-index: 999;
  }

  button.btn {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 2rem;

  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 40px;
    cursor: pointer;
    z-index: 999;
  }
`;
