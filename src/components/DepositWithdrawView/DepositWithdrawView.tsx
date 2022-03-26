import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styled from "styled-components";
import DepositPanel from "./DepositPanel";
import WithdrawPanel from "./WithdrawPanel";

const DepositWithdrawView = () => {
    const onTabSelect = (index: number, lastIndex: number, event: Event): boolean => {
        return true
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
                    <Tab>FARM</Tab>
                    <Tab>SWAP</Tab>
                </TabList>

                <TabPanel>
                    <DepositPanel />
                </TabPanel>
                <TabPanel>
                    <WithdrawPanel />
                </TabPanel>
            </Tabs>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    padding: 3rem 1rem 1rem 1rem;
`;

export default DepositWithdrawView;