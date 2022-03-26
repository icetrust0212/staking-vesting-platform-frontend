import styled from "styled-components"

const AmountInput = ({addOnText}: PropsType) => {
    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
            <AddOn id="basic-addon2">{addOnText || 'Max'}</AddOn>
        </InputGroup>
    )
}

const InputGroup = styled.div`
    display: flex;
    align-items: center;
    width: ${({width}: PropsType) => width || '100%'}
`

const FormControl = styled.input`
    flex: 1;
`;

const AddOn = styled.div`
    padding: 5px;
    width: fit-content;
`

interface PropsType {
    width?: string,
    addOnText?: string,
    fontSize?: string,
    fontColor?: string,
}


export default AmountInput