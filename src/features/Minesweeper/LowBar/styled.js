import styled, { css } from 'styled-components';

export const LowBarWrapper = styled.div`
    width: 100%;
    font-size: 20px;
    padding: 10px;
    margin-top: 12px;
    border-radius: 1px;
    background-color: ${({ theme }) => theme.colors.mainDark};
    display: flex;
    justify-content: space-between;
`;

export const DifficultyLevelButton = styled.button`
    border: none;
    color: white;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.topBarBackground};
    border-radius: 1px;
    padding: 6px;
    font-size: 16px;

    ${({ buttonDifficultyLevel, difficultyLevel }) => buttonDifficultyLevel === difficultyLevel && css`
        font-weight: bold;
    `};
    &:hover {
        filter: brightness(110%);
    }
    &:active {
        filter: brightness(120%);
    }
`;