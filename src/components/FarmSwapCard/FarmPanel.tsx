import styled from "styled-components"
import Row from "../../layouts/Row/Row"
import CardText from "../CardText/CardText"
import eggImage from '../../assets/image/egg.svg';
import feedImage from '../../assets/image/feed.svg';
import RoundButton from "../RoundButton/RoundButton";
import Margin from "../../layouts/Margin/Margin";

const FarmPanel = () => {
    const stakedEggedCount = 0;
    const estDailyFeed = 0;
    return (
        <Wrapper>
            <Row verticalAlign={'center'} gap={'5px'} horizontalAlign={'center'}>
                <CardText text={stakedEggedCount.toFixed(3)} size={'35px'} color={'white'}/>
                <Image src={eggImage} />
            </Row>
            <CardText text={'YOUR STAKED EGG'} size={'15px'} color={'var(--highlight-color)'}/>
            <Margin top={'15px'}/>
            <Row verticalAlign={'center'} gap={'5px'} horizontalAlign={'center'}>
                <CardText text={estDailyFeed.toFixed(3)} size={'35px'} color={'white'}/>
                <Image src={feedImage} />
            </Row>
            <CardText text={'EST DAILY FEED'} size={'15px'} color={'var(--highlight-color)'}/>
            <FarmingMultiplierLayout>
                <CardText text={'X2'} size={'1rem'}/>
                <CardText text={'farming multiplier'} size={'0.8rem'}/>
            </FarmingMultiplierLayout>
            <RoundButton width={'100%'}>Stake</RoundButton>
            <Margin top={'10px'}/>
            <RoundButton reverse={true} width={'100%'}>Unstake</RoundButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    padding: 2rem;
`
const Image = styled.img`
    width: 30px;
    height: 30px;
`;

const FarmingMultiplierLayout = styled.div`
    padding: 0 0.5rem;
    text-align: center;
    width: fit-content;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
    margin: 3rem auto;
`;



export default FarmPanel