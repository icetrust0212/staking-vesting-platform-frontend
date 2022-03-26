import styled from "styled-components";
import CardText from "../components/CardText/CardText";
import RoundCard from "../layouts/RoundCard/RoundCard";
import Row from "../layouts/Row/Row";
import eggImage from '../assets/image/egg.svg';
import avaxImage from '../assets/image/avax.svg'
import Column from "../layouts/Column/Column";
import DepositWithdrawView from "../components/DepositWithdrawView/DepositWithdrawView";

const Farm = () => {
    return (
        <Wrapper>
            <RoundCard>
                <Row verticalAlign="center">
                    <Row verticalAlign={'center'} gap={'5px'} width="fit-content">
                        <Image src={eggImage} />
                        <CardText text={'$EGG'} size={'35px'} color={'white'}/>
                    </Row>
                    <CardText text="/" size="25px" color="white" />
                    <Row verticalAlign={'center'} gap={'5px'} width="fit-content">
                        <Image src={avaxImage} />
                        <CardText text={'$EGG'} size={'35px'} color={'white'}/>
                    </Row>
                </Row>

                <Row>
                    <Column width={'35%'}>
                        <RoundCard background="var(--semi-background)">
                            <DepositWithdrawView />
                        </RoundCard>
                    </Column>
                    <Column width={'0'}>
                        <RoundCard>
                            {/* <ActivateFarmingView /> */}
                        </RoundCard>
                    </Column>
                </Row>
            </RoundCard>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`;

const Image = styled.img`
    width: 30px;
    height: 30px;
`
export default Farm;