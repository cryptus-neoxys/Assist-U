import styled from "styled-components";

export const HeaderWrapper = styled.div`
  .zet {
    background: #000a40;
    height: 72px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    /* justify-content: flex-end; */
    padding-right: 1em;
  }
  .zet div {
    font-size: 1.3rem;
    padding: 0.3em 1em;

    margin: 0.9em 0;
    font-weight: bold;
  }
  .zet div:hover {
    color: white;
  }
  .zet div a {
    text-decoration: none;
    color: white;
    transition: 0.3s ease-in-out;
  }

  .nav-icon {
    color: white;
    font-size: 1.2em;
  }

  .logo {
    flex-grow: 1;
    color: white;
    font-size: 3em;
  }
`;
