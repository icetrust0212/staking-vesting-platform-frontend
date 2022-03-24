import styled from "styled-components"

const RoundCard = ({children, background}: PropsType) => {
    return (
        <Container background={background}>
            {children}
        </Container>
    )
}

const Container = styled.section`
    background: ${(props:PropsType) => props.background || "var(--active-color)"};
    border-radius: 15px;
    width: 100%;
    border-color: var(--active-color);
`;

interface PropsType {
    children: any,
    background?: string
}
export default RoundCard