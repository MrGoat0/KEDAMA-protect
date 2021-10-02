import { Form, Col } from "react-bootstrap";

const Price = (props) => {
    const { setPrice } = props;

    const saveValue = (event) => {
        setPrice(event.target.value)
    }
    return (
        <Col xs="auto">
            <Form.Control onChange={saveValue} type="number" placeholder="Valor unitario ($COP)" />
        </Col >
    )
}

export default Price;