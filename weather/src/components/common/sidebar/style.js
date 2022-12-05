import styled from "styled-components";

export const SiderContainer = styled.div`
    float: left;
    height: 100vh;
    background-color: #3867d6;
    overflow: hidden;
    width:100px;
  
    .inactive-tab{
        width: 100%;
        height: 84px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        font-size: 15px;
        font-weight: 500;
      }
      .active-tab{
        background: #EAB543;
        width: 100%;
        height: 84px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        font-size: 15px;
        font-weight: 500;
        
      }
      .mode{
        position: absolute;
        top:210px;
       width:100px;
      .material-symbols-outlined {
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
        cursor: pointer;
      }
      .material-symbols-dark {
        font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
        cursor: pointer;
        font-family: 'Material Symbols Outlined';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: 'liga';
        -webkit-font-smoothing: antialiased;
      }
    }
      }
`;
