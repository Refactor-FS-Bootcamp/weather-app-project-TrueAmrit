import styled from "styled-components";

export const HeaderHomeContainer = styled.div`
  background-color: ${(context) =>
    context.mode === "dark" ? "rgb(40, 44, 52)" : "white"};
  color: ${(context) => (context.mode === "dark" ? "white" : "black")};

  .content-home {
    width: calc(100vw - 140px);
    padding: 20px;

    .header-wrapper {
      display: flex;
      justify-content: space-between;
      background-color: #d9ebfe;
      height: 45px;
      align-items: center;
      font: normal bold 18px/24px larger;
      padding: 20px;
      padding-right: 30px;

      .tittle-header {
        color: black;
      }
    }
    .body-container {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;

      .favcity-box {
        display: flex;
        flex-direction: column;
        width: 250px;
        margin: 10px 0 0 10px;
        height: 110px;
        border: 1px solid lightgrey;
        box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
        padding: 10px;

        .favcity-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-family: "Times New Roman", Times, serif;
          font-size: large;
          font-weight: 500;
        }
        .favcity-content {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          width: fit-content;
          align-items: flex-start;

          div .favcity-content > * {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
`;

// rgb(40, 44, 52);
