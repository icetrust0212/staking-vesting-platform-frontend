import styled from "styled-components";
import Margin from "../../layouts/Margin/Margin";
import CardText from "../CardText/CardText";
import RoundButton from "../RoundButton/RoundButton";

const SwapView = () => {
    return (
        <Wrapper>
            <SwapMultiplierLayout>
                <CardText text={'X450'} size={'1rem'}/>
                <CardText text={'swap multiplier'} size={'0.8rem'}/>
            </SwapMultiplierLayout>
            <Margin top={'10px'}/>
            <RoundButton width={'100%'}>Stake</RoundButton>

        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    padding: 2rem;
`;

const SwapMultiplierLayout = styled.div`
    padding: 0 0.5rem;
    text-align: center;
    width: fit-content;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
    margin: 3rem auto;
`;
export default SwapView