import styled from 'styled-components'

const DefaultStyleQuestionnaireBody = styled.div`
    margin-top: 30px;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    min-height: 600px;
    border-radius: 5px;
    background: #f0f0f0;
    box-shadow:  10px 10px 9px #9c9c9c,
                 -10px -10px 9px #ffffff;
`
const StyleQuestionnaireBody = styled(DefaultStyleQuestionnaireBody)(({ theme, variant }) => theme.body[variant])

export default StyleQuestionnaireBody
