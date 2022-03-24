import styled from "styled-components";
import ChikenList from "../ChikenList/ChikenList";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Row from "../../layouts/Row/Row";
import RoundButton from "../RoundButton/RoundButton";
import Column from "../../layouts/Column/Column";

const RoostTabs = () => {
    const allChickens: any[] = [];
    const roostedChickens: any[] = [];
    const unRoostedChikens: any[] = [];

    const onTabSelect = (index: number, lastIndex: number, event: Event): boolean => {
        return true;
    }

    const roostAll = () => {

    }

    const unRoostAll = () => {

    }

    return (
        <Wrapper>
             <Tabs 
                defaultIndex={0} 
                defaultFocus={true} 
                onSelect={onTabSelect}
                selectedTabClassName={"selected-tab"}
                disabledTabClassName={"disabled-tab"}
            >
                <TabList>
                    <Tab>All({allChickens.length})</Tab>
                    <Tab>Roosted({roostedChickens.length})</Tab>
                    <Tab>Unroosted({unRoostedChikens.length})</Tab>
                </TabList>

                <TabPanel>
                    <ChikenList data={allChickens}/>
                </TabPanel>
                <TabPanel>
                    <ChikenList data={roostedChickens}/>
                </TabPanel>
                <TabPanel>
                    <ChikenList data={unRoostedChikens}/>
                </TabPanel>
            </Tabs>
            <ButtonLayout>
                <Row>
                    <Column width={'140px'}>
                        <RoundButton disable={true} onClick={roostAll}>Roost All</RoundButton>
                    </Column>
                    <Column width={'140px'}>
                        <RoundButton disable={true} onClick={unRoostAll}>Unroost All</RoundButton>
                    </Column>
                </Row>
            </ButtonLayout>
        </Wrapper>
    )    
}

const Wrapper = styled.div`
    position: relative;
`;

const ButtonLayout = styled.div`
    position: absolute;
    right: 10px;
    top: 5px;
    width: fit-content;
`

export default RoostTabs;