import styled from "styled-components";

export const MainContent = styled.div`
  height: 100vh;
  background-color: ${(context) =>
    context.mode === "dark" ? "rgb(40, 44, 52)" : "white"};
  color: ${(context) => (context.mode === "dark" ? "white" : "black")};

  .main-content {
    width: calc(100vw - 148px);
    height: calc(100vh - 80px);
    padding: 20px;

    .main-wrapper {
      display: flex;
      width: 100%;
      justify-content: space-between;

      .left-card {
        overflow: scroll;
        width: 30%;
        display: flex;
        flex-direction: column;
        border: 1px solid #e5e5e5;
        box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
        height: calc(100vh - 50px);

        .card-header {
          font: normal bold 18px/24px larger;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 50px;
          border-bottom: 1px solid #e5e5e5;
          padding: 10px;
        }
        .card-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: calc(100vh - 110px);

          .city-box {
            margin-bottom: 5px;
            display: flex;
            flex-direction: column;
            height: 50px;
            width: 100%;
            border: 1px solid rgb(218, 216, 216);
            box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
            cursor: pointer;
            padding: 5px 0;
            .city-d {
              padding: 2px;
              max-width: fit-content;
              margin-left: 10px;
            }
          }
          .city-box :nth-child(1) {
            font-family: "Times New Roman", Times, serif;
            font-size: larger;
            font-weight: 450;
          }
          .city-box:hover {
            background-color: lightgrey;
          }
        }
      }
      .left-card::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export const CityDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: calc(100vh-50px);
  .right-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid #e5e5e5;
    box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);

    .right-card-header {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e5e5e5;
      justify-content: space-between;
      width: table-row;
      height: 50px;
      box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
      font-family: "Times New Roman", Times, serif;
      font-weight: 700;
      font-size: 25px;
      padding: 10px;
    }
    .right-card-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: calc(100vh - 350px);
      padding: 10px;
    }
  }
`;
