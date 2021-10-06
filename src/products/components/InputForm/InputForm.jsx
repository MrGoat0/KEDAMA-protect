import { Container, Row } from "react-bootstrap";
import AutoId from "./AutoId.jsx"
import Product from "./ProductInput.jsx";
import Price from "./PriceInput.jsx";
import State from "./StateInput.jsx";
import RegisterButton from "./RegisterButton.jsx";
import { useState } from "react";

const ImputForm = (props) => {
    const { records, setRecord, info, setInfo, setAlert, setSearch } = props;
    const [missing, setMissing] = useState({ description: false, price: false, state: false });

    return (
        <Container className="mt-3">

            <Row className="d-flex justify-content-center mb-3">
                <Product info={info} setInfo={setInfo} missingInput={missing.description} />
                <Price info={info} setInfo={setInfo} missingInput={missing.price} />
            </Row>

            <Row className="d-flex justify-content-center mb-1">
                <State info={info} setInfo={setInfo} missingInput={missing.state} />
                <AutoId setSearch={setSearch} />
            </Row>

            <Row className="d-flex justify-content-center mb-4">
                <RegisterButton records={records}
                    setRecord={setRecord}
                    info={info}
                    setInfo={setInfo}
                    setAlert={setAlert}
                    missing={missing}
                    setMissing={setMissing} />
            </Row>
        </Container>
    )
}

export default ImputForm;