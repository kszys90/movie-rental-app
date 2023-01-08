import { css } from 'styled-components'

export const Theme = {
  body: {
    dark: css`
            border-radius: 27px;
            background: linear-gradient(145deg, #474747, #555555);
            box-shadow:  16px 16px 32px #474747,
                        -16px -16px 32px #575757;
            color: lightgrey;
        `,
    light: css`
            border-radius: 27px;
            background: linear-gradient(145deg, #d4dbd4, #fdfffd);
            box-shadow:  16px 16px 32px #d4dbd4,
                        -16px -16px 32px #ffffff;
        `
  }
}
