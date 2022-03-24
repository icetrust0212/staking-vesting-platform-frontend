import styled from 'styled-components';
import Column from '../layouts/Column/Column';
import RefreshButton from '../components/RefreshButton/RefreshButton';
import RoostDetail from '../components/RoostDetail/RoostDetail';
import RoundCard from '../layouts/RoundCard/RoundCard';
import Row from '../layouts/Row/Row';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import RoostTabs from '../components/RoostTabs/RoostTabs';
import FarmSwapCard from '../components/FarmSwapCard/FarmSwapCard';
import ClaimCard from '../components/ClaimCard/ClaimCard';

const Roost = () => {
    return (
        <Wrapper>
            <SectinoHeader>
                <SectionTitle text={'Roost'} size={'2rem'}/>
                <RefreshButton />
            </SectinoHeader>
            <Row>
                <Column width={'67%'}>
                    <RoundCard>
                        <RoostDetail />
                        <RoostTabs />
                    </RoundCard>
                </Column>
                <Column width={'0'}>
                    <RoundCard>
                        <FarmSwapCard />
                    </RoundCard>
                    <RoundCard>
                        <ClaimCard />
                    </RoundCard>
                </Column>
            </Row>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
`;

const SectinoHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

interface ColPropsType {
    width: string
}
export default Roost;