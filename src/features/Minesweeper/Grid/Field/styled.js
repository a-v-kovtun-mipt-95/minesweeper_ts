import styled, { css } from 'styled-components';
import mine from './../../icons/mine.png';
import flag from './../../icons/flag.png';
import questionMark from './../../icons/questionMark.png';
import { EXPERT, INTERMEDIATE } from '../../consts';

export const StyledField = styled.button`
	width: 40px;
    height: 40px;
    padding: 0px;
    font-size: 13px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.mainLight};
    border-top: 2px solid ${({ theme }) => theme.colors.lightBorder};
    border-right: 2px solid ${({ theme }) => theme.colors.darkBorder};
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkBorder};
    border-left: 2px solid ${({ theme }) => theme.colors.lightBorder};

    ${({ difficultyLevel }) => difficultyLevel === INTERMEDIATE && css`
        width: 32px;
        height: 32px;;
    `};
    ${({ difficultyLevel }) => difficultyLevel === EXPERT && css`
        width: 28px;
        height: 28px;;
    `};

    ${({ revealed }) => revealed && css`
        filter: brightness(108%);
        border-top: 1px solid ${({ theme }) => theme.colors.semiDarkBorder};
        border-left: 1px solid ${({ theme }) => theme.colors.semiDarkBorder};
        border-right: initial;
        border-bottom: initial;
    `}

    ${({ surroundingMines }) => surroundingMines === 1 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.one};
    `}
    ${({ surroundingMines }) => surroundingMines === 2 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.two};
    `}
    ${({ surroundingMines }) => surroundingMines === 3 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.three};
    `}
    ${({ surroundingMines }) => surroundingMines === 4 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.four};
    `}
    ${({ surroundingMines }) => surroundingMines === 5 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.five};
    `}
    ${({ surroundingMines }) => surroundingMines === 6 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.six};
    `}
    ${({ surroundingMines }) => surroundingMines === 7 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.seven};
    `}
    ${({ surroundingMines }) => surroundingMines === 8 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.eight};
    `}

    ${({ mine, lost }) => mine && lost && css`
        color: black;
        background-color: red;
    `}
    ${({ mine, won }) => mine && won && css`
        color: black;
        background-color: green;
    `}
`;

const addStyleToFieldIcon = () =>
    `   
        margin: auto;
        width: 50%;
        height: 50%;
        background-size: cover;
        background-position: center;
    `;

export const MineIcon = styled.div`
    ${addStyleToFieldIcon()}
	background-image: url(${mine});
`;

export const FlagIcon = styled.div`
    ${addStyleToFieldIcon()}
	background-image: url(${flag});
`;

export const QuestionMark = styled.div`
    ${addStyleToFieldIcon()}
	background-image: url(${questionMark});
`;