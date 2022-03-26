import styled from "styled-components";
import Margin from "../../layouts/Margin/Margin";
import Row from "../../layouts/Row/Row";
import CardText from "../CardText/CardText";
import RoundButton from "../RoundButton/RoundButton";
import traderJoeIcon from '../../assets/image/traderJoe.png';
import Column from "../../layouts/Column/Column";
import AmountInput from "../AmountInput/AmountInput";

const DepositPanel = () => {
    const balance = 0;

    return (
        <Wrapper>
            <Column width="100%">
                <Row>
                    <RoundButton width={'100%'}>
                        <CardText text={'TRADERJOE'}/>
                        <Image src={traderJoeIcon}/>
                    </RoundButton>
                </Row>

                <CardText text={'Get JLP Tokens Here'} size={'15px'} color={'var(--highlight-color)'}/>
                <CardText text={balance.toFixed(4)} size={'35px'} color={'white'}/>
                <CardText text={'TOTAL LP WALLET BALANCE'} size={'25px'} color={'white'}/>
                <Margin top={'15px'}/>
                <Row verticalAlign={'center'} gap={'5px'} horizontalAlign={'center'}>
                </Row>
                
                <AmountInput addOnText="Max" />
                <RoundButton width={'100%'} disable={true}>Approve</RoundButton>
                <Margin top={'10px'}/>
                <RoundButton width={'100%'}>Deposit</RoundButton>
            </Column>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    padding: 2rem;
`;

const Image = styled.img`
    width: 30px;
    height: 30px;
`;
export default DepositPanel;