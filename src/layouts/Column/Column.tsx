import styled from "styled-components";

const Column = ({children, gap, width}: PropsType) => {
    return (
        <Div gap={gap} width={width}>{children}</Div>
    )
}

interface PropsType {
    width?: string,
    children?: any,
    gap?: string
}

const Div = styled.div`
    gap: ${({gap}: PropsType) => gap || '20px'};
    flex-wrap: wrap;
    width: ${({width}: PropsType) => width || '50%'};
    flex: ${({width}: PropsType) => width === "0" ? 1 : ''};
    display: flex;
    flex-direction: column;
    & > * {
        display: block;
    }
`;

export default Column