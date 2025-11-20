import styled from "styled-components";

export const StyledInput = styled.input<{ removeMarginBottom: boolean }>`
    height: 34px;
    border-radius: 8px;
    border: solid 1px #bdbdbd;
    padding: 4px 8px;
    margin-bottom: ${({ removeMarginBottom }) => (removeMarginBottom ? 0 : 12)}px;
`;

export const InputLabel = styled.label`

`;

export const InputError = styled.p`
    color: red;
    font-size: 14px;
    margin-bottom: 12px;
`;