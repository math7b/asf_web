import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :focus {
        outline: transparent;
        border-radius: 8px;
    }
    * {
        box-sizing: border-box;
    }
    body {
        background: url(
            https://images.unsplash.com/photo-1598368095175-13b807fa0895?w=1366&h=768&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJlbGhhc3xlbnwwfHwwfHx8MA%3D%3D
        );
        background-size: 100vw 100vh;
        background-attachment: fixed;
        background-repeat: no-repeat;
    }
    a{
        text-decoration: none;
        color: ${props => props.theme.texts.text_950};
        &:hover {
            cursor: pointer;
            color: ${props => props.theme.texts.text_100};
        }
    }
    body, imput, textare, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        margin: 0;
        padding: 0;
    }
    label {
        display: block;
        margin-bottom: 8px;
    }
    button {
        border: 0px;
        border-radius: 8px;
        font-size: 0.875rem;
        margin-right: 8px;
        padding: 8px;
        cursor: pointer;
        background: ${props => props.theme.colors.color_400};
        color: ${props => props.theme.texts.text_950};
    }
`;

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1012px;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem 1rem 2rem 1rem;
    background: ${props => props.theme.colors.color_white_opack};
    border-radius: 4px;
    p, time, span {
        margin: 0;
        padding: 0;
    }
`;

export const StyledPost = styled.div`
    display: flex;
    flex: content;
    width: 100%;
    &:not(:first-child) {
        padding-top: 16px;
        margin-top: 16px;
    }
`

export const CustonInput = styled.input`
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #767676;
    border-radius: 8px;
    &:focus {
        border: 1px solid ${props => props.theme.colors.color_600};
    }
`;
