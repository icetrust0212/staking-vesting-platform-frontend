import styled from "styled-components";
import CardText from "../CardText/CardText";
import Column from "../../layouts/Column/Column";
import Row from "../../layouts/Row/Row";
import eggImage from '../../assets/image/egg.svg';
import ClaimButton from "../ClaimButton/ClaimButton";

const RoostDetail = () => {

    const weight = 0;
    const totalWeight = 178_444;
    const eggClaimAmount = 0.0;
    const dailyEggAmout = 0.00;
    return (
        <Wrapper>
            <RoostOutline>
                <CardText size={'24px'} color={'white'} text={'Total KG of your roost'} />
                <Row gap={'40px'}>
                    <Column width={'40%'} gap={'8px'}>
                        <CardText text={`${weight}kg`} size={'48px'} color={'white'}/>
                        <CardText text={`Total kg in barn`} size={'14px'} color={'white'}/>
                        <CardText text={`${totalWeight}kg`} size={'24px'} color={'white'}/>
                    </Column>
                    <Column width={'0'}>
                        <ClaimCard>
                            <Row gap={'1rem'}>
                                <Column width={'0'} gap={'8px'}>
                                    <Row verticalAlign={'center'} gap={'5px'}>
                                        <CardText text={eggClaimAmount.toFixed(3)} size={'35px'} color={'white'}/>
                                        <Image src={eggImage} />
                                    </Row>
                                    <CardText text={'AVAILABLE EGG TO CLAIM'} size={'15px'} color={'var(--highlight-color)'}/>
                                    <CardText text={`est ${dailyEggAmout}EGG per day`} size={'15px'} color={'#b5b5c3'}/>
                                </Column>
                                <Column width={'35%'}>
                                    <ClaimButton />
                                </Column>
                            </Row>
                        </ClaimCard>
                    </Column>
                </Row>
            </RoostOutline>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 
`;

const RoostOutline = styled.div`
    padding: 3rem;
    width: 100%;
`

const ClaimCard = styled.div`
    background: #2a2c54;
    border-radius: 15px;
    box-shadow: 1px 1px 10px #1d1e36;
    width: 100%;
    height: auto;
    padding: 1rem;
`;

const Image = styled.img`
    width: 30px;
    height: 30px;
`
export default RoostDetail;