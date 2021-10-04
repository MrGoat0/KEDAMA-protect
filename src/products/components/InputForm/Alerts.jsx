import { Button, Alert, Row, Col } from "react-bootstrap";

const Alerts = (props) => {
    const { alert, setAlert, id } = props;


    if (alert.type === "success") {
        var message = "Producto registrado existosamente con el ID "
        var showID = id - 1
    } else if (alert.type === "danger") {
        message = "Diligencie todos los campos requeridos."
    }

    return (
        <Alert show={alert.show} variant={alert.type}>
            <Row>
                <Col xs={10}>
                    {message} <b>{showID}</b>
                </Col>
                <Col xs={2} className="d-flex justify-content-end">
                    <Button onClick={() => setAlert({ show: false, type: alert.type })}
                        variant={"outline-" + alert.type}>
                        Entendido
                    </Button>

                </Col>
            </Row>

        </Alert >
    )
}

export default Alerts;