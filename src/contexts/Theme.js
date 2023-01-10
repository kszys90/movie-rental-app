import { css } from 'styled-components'

export const Theme = {
  background: {
    dark: css`
      background: #222222;
      color: white;
        `,
    light: css`
      background: #ececec;
      color: black;
        `
  },
  logo: {
    title: {
      dark: css`
        color: red;
        text-shadow: 4px 4px 5px black;
      `,
      light: css`
        color: red;
        text-shadow: 1px 1px 2px black;
      `
    }
  },
  headerContainer: {
    dark: css`
      background: #222222;
    `,
    light: css`
      background: #ececec;
    `
  },
  navBarContainer: {
    dark: css`
      background: #2c2c2c;
      box-shadow:  6px 6px 12px #1c1c1c,
                  -6px -6px 12px #3c3c3c;
    `,
    light: css`
      background: #d8d8d8;
      box-shadow:  5px 5px 16px #7d7d7d,
                  -5px -5px 16px #ffffff;
    `
  },
  topBarButton: {
    dark: css`
      color: #ffffff;
      background-color: #3d3d3d;
        &:hover {
          background-color: #fff;
          color: #4f4f4f;
          border: solid 0px #ffffff;
    }
  `,
    light: css`
    background-color: #fff;
    color: #4f4f4f;
      &:hover {
        color: #ffffff;
        background-color: #3d3d3d;
        border: solid 0px #ffffff;
    }
  `
  },
  title: {
    size: {
      big: css`
        font-size: 150%;
      `,
      small: css`
        font-size: 110%;
      `
    },
    variant: {
      dark: css`
      `,
      light: css`
      `
    }
  },
  text: {
    size: {
      big: css`
        font-size: 120%;
      `,
      small: css`
        font-size: 80%;
      `
    },
    custom: {
      price: {
        dark: css`
          text-transform: capitalize;
          font-size: 130%;
          font-weight: 900;
      `,
        light: css`
          text-transform: capitalize;
          font-size: 130%;
          font-weight: 900;
        `
      },
      only: {
        dark: css`
          text-transform: capitalize;
          font-size: 130%;
          font-weight: 600;
        `,
        light: css`
          text-transform: capitalize;
          font-size: 130%;
          font-weight: 600;
        `
      }
    }
  },
  searchContainer: {
    dark: css`
      background: #2c2c2c;
      box-shadow:  6px 6px 12px #1c1c1c,
                  -6px -6px 12px #3c3c3c;
    `,
    light: css`
      background: #d8d8d8;
      box-shadow:  5px 5px 16px #7d7d7d,
                  -5px -5px 16px #ffffff;
    `
  },
  movieContainer: {
    dark: css`
      background: #2c2c2c;
      box-shadow:  6px 6px 12px #1c1c1c,
                  -6px -6px 12px #3c3c3c;
    `,
    light: css`
      background: #d8d8d8;
      box-shadow:  5px 5px 16px #7d7d7d,
                  -5px -5px 16px #ffffff;
    `
  },
  button: {
    variant: {
      dark: css`
      `,
      light: css`
      `
    },
    custom: {
      buyNow: css`
      font-weight: 900;
      font-size: 16px;
      color: #ffffff;
      background-color: #0062ff;
      padding: 10px 36px;
      border-radius: 50px;
      transition : 1113ms;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      &:hover {
          transition : 1113ms;
          padding: 10px 50px;
          transform : translateY(-0px);
          background-color: #12db00;
          color: #ffffff;
          border: solid 1px #000000;
    }
      `
    }
  }
}
