import BDModal from "./BD-modal";
import React,{useState,useEffect} from 'react';
import api from "../../api.js";
const UserForm =(props) => {
    const {changeState,changeUserName,userName,tableToShow,handleRecord} = props;
    // const [users,setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const user = "usuario";

    // useEffect(()=>{
    //   async function fetchData(){
    //     const response = await api.users.list();
    //     setUsers(response);
    //   }
    //   fetchData();
    // },[])

    return (
      <div>
        <div className="p-1">
          <h3>Información del usuario y venta</h3>
        </div>
        <div className="d-flex flex-row justify-content-between p-1 ">
          <div className="user-button input-group d-flex flex-column px-2 pt-2 pb-2">
            <span>
              {" "}
              <strong>Usuario</strong>{" "}
            </span>
            <div className="d-flex flex-row">
              <input
                id="user-form"
                type="text"
                className="form-control"
                aria-label="Text input with segmented dropdown button"
                placeholder={userName}
                onChange={changeUserName}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleShow}
              >
                BD
              </button>
              <BDModal show={show} onHide={handleClose} type={user} tableToShow={tableToShow} handleRecord={handleRecord}/>
            </div>
          </div>
          <div className="user-button input-group d-flex flex-column px-2 pt-2 pb-2">
            <span>
              {" "}
              <strong> Estado </strong>{" "}
            </span>
            <div className="d-flex flex-row">
              <input
                id="state-form"
                type="text"
                className="form-control"
                aria-label="Text input with segmented dropdown button"
                placeholder="Estado"
                onChange={changeState}
              />
            </div>
          </div>
        </div>
      </div>
    );
}
export default UserForm