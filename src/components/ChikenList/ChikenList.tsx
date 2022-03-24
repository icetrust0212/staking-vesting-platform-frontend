import styled from "styled-components";
import Row from "../../layouts/Row/Row";
import Select from 'react-select';
import CardText from "../CardText/CardText";
import sortOptions from "./sortOption";
import colourStyles from "./style";

const ChikenList = ({data}: PropsType) => {

    return (
        <Wrapper>
            <Row width={'100%'}>
                <CardText text={'SORT: '} size={'1.5rem'}/>
                <Select options={sortOptions} styles={colourStyles} />
            </Row>
            {
                data.length < 1 && (
                    <EmptyView><CardText text={'No Chickens Available'} size={'1rem'} /></EmptyView>
                )
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 20px;
`;

const EmptyView = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
interface PropsType {
    data: any[]
}
export default ChikenList;