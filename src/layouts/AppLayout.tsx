import styled from 'styled-components';
import Header from "../components/Header/Header";

const AppLayout = ({children}: PropsType) => {

    return (
        <AppWrapper>
            <Header />
            <ContentWrapper>
            {
                children
            }
            </ContentWrapper>
        </AppWrapper>
    )
}

interface PropsType {
    children: any
}

export default AppLayout;

const AppWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    background: transparent;
    position: relative;
    background-size: contain;
    min-height: 100vh;
    background: var(--primary-color);
`;

const ContentWrapper = styled.div`
    z-index: 1;
    width: 100%;
    padding: 100px 5% 100px 5%;
    max-width: var(--max-width);
    min-height: 100vh;
`