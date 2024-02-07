import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  border-bottom: 1px solid ${pallete.grayColor};
  box-shadow: 0 0 0 3px ${pallete.searchBG};
  .menu {
    position: relative;
    .category {
      padding: 15px 10px;
      position: relative;
      .category-top {
        font-size: 1.4rem;
        font-weight: 700;
        color: ${pallete.grayColor};
      }
      .category-dropdown {
        display: none;
        position: absolute;
        top: 100%;
        right: 0;
        width: 950px;
        max-height: 65vh;
        overflow: hidden;
        background: ${pallete.whiteColor};
        z-index: 5;
        border: 1px solid ${pallete.grayColor};
        border-radius: 0 0 ${pallete.defaultBR} ${pallete.defaultBR};
        .main-menu {
          width: 250px;
          height: 100%;
          .category-items {
            width: 100%;
            height: 100%;
            overflow: auto;
            background: ${pallete.searchBG};
            border-radius: 0 0 ${pallete.defaultBR} 0;
            .category-item {
              width: 100%;
              flex-grow: 1;
              transition: all 0.2s ease-in-out;
              a {
                flex-grow: 1;
                padding: 10px;
                min-width: 150px;
                font-size: 1.4rem;
                font-weight: 400;
                color: ${pallete.darkColor};
              }
              &.active {
                background: ${pallete.whiteColor};
              }
            }
          }
        }
      }
      &:before {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        height: 1px;
        width: 0;
        background: ${pallete.primaryColor};
        transition: all 150ms ease-in-out;
      }
      &:hover {
        .category-dropdown {
          display: flex;
        }
        &:before {
          left: 0;
          right: auto;
          width: 100%;
        }
      }
    }
    .menu-items {
      .item {
        height: 100%;
        position: relative;
        padding: 16.6px 10px;
        a {
          font-size: 1.2rem;
          color: ${pallete.grayColor};
        }
        &:before {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          height: 1px;
          width: 0;
          background: ${pallete.primaryColor};
          transition: all 150ms ease-in-out;
        }
        &:hover {
          &:before {
            left: 0;
            right: auto;
            width: 100%;
          }
        }
      }
    }
  }
`;
