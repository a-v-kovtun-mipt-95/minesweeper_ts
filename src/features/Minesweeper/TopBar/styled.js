import styled from 'styled-components';
import flag from './../icons/flag.png'
import angryFace from './../icons/angryFace.png'
import happyFace from './../icons/happyFace.png'
import likeABossFace from './../icons/likeABossFace.png'

export const TopBarWrapper = styled.div`
    width: 100%;
    color: white;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 12px;
    border-radius: 1px;
    background-color: ${({ theme }) => theme.colors.mainDark};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NewGameButton = styled.button`
    cursor: pointer;
    padding: 2px;
    border-top: 1px solid ${({ theme }) => theme.colors.lightBorder};
    border-right: 1px solid ${({ theme }) => theme.colors.darkBorder};
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkBorder};
    border-left: 1px solid ${({ theme }) => theme.colors.lightBorder};
    border-radius: 1px;
    background-color: ${({ theme }) => theme.colors.topBarBackground};

    &:hover {
        filter: brightness(110%);
    }
    &:active {
        border: 1px solid ${({ theme }) => theme.colors.darkBorder};
    }
`;

export const FlagWrapper = styled.div`
    padding: 10px;
    min-width: 100px;
    text-align: center;
    border-radius: 1px;
    background-color: ${({ theme }) => theme.colors.topBarBackground};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FlagIcon = styled.div`
	background-image: url(${flag});
    margin-right: 6px;
    height: 24px;
    width: 24px;
    background-size: cover;
    background-position: center;
`;

const addStyleToFaceIcon = () =>
    `   
        width: 40px;
        height: 40px;
        background-size: cover;
        background-position: center;
    `;

export const AngryFaceIcon = styled.div`
    ${addStyleToFaceIcon()}
	background-image: url(${angryFace});
`;

export const HappyFaceIcon = styled.div`
    ${addStyleToFaceIcon()}
	background-image: url(${happyFace});
`;

export const LikeABossFaceIcon = styled.div`
    ${addStyleToFaceIcon()}
	background-image: url(${likeABossFace});
`;