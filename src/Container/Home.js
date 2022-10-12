import "../Assets/css/Home.css";
import Contexto from "../Context/Contexto";
import { useState,useContext} from "react";
import { useNavigate } from "react-router-dom";






export default function Home(){

    const [ nombreApellido, setNombreApellido] = useState("");
    const [ email, setEmail] = useState("");
    const [ domicilio, setDomicilio] = useState("");
    const [ celular, setCelular] = useState("");
    const navigate = useNavigate();

    const {registro,cliente,modificar,eliminar} = useContext(Contexto);

    const registrarCliente = async (e) =>{
        e.preventDefault();
        await registro(nombreApellido,email,domicilio,celular);
        navigate("/");
    }

    const modificarCliente = async (e) =>{
        e.preventDefault();
        var identificador = (document.getElementById("identificador").value);
        await modificar(identificador,nombreApellido,email,domicilio,celular);
        navigate("/")
    }
    const eliminarCliente = async (e) =>{
        e.preventDefault();
        var identificador = (document.getElementById("identificador").value);
        await eliminar(identificador)
        navigate("/");
    }
    function prueba(){
        console.log(document.getElementById("identificador").value);
    }
    return(
        <>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Crud de<b> Cliente</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Agregar Nuevo Cliente</span></a>
                                    {/* <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Eliminar</span></a>						 */}
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll"/>
                                            <label htmlFor="selectAll" ></label>
                                        </span>
                                    </th>
                                    <th>Nombre y Apellido</th>
                                    <th>Email</th>
                                    <th>Domicilio</th>
                                    <th>Celular</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cliente.map((client) => (
                                    <tr key={client.id}>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
                                                <label htmlFor="checkbox1"></label>
                                            </span>
                                        </td>
                                        
                                        <td> {client.nombreApellido} </td>
                                        <td> {client.email}</td>
                                        <td> {client.domicilio}</td>
                                        <td> {client.celular}</td>
                                        <td>
                                            {/* la iteraccion tiene que ser aca */}
                                            <input id="identificador" type="text" value={client.nombreApellido}></input>
                                            <a href="#editEmployeeModal"  className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>        
            </div>
            {/* <!-- Agregar Nuevo Cliente --> */}
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div>
                            <div className="modal-header">						
                                <h4 className="modal-title">Añadir Cliente</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Nombre y Apellido</label>
                                    <input type="text" className="form-control" required onChange={(ev)=> setNombreApellido(ev.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required onChange={(ev)=> setEmail(ev.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Domicilio</label>
                                    <textarea className="form-control" required onChange={(ev)=> setDomicilio(ev.target.value)}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Celular</label>
                                    <input type="text" className="form-control" required onChange={(ev)=> setCelular(ev.target.value)}/>
                                </div>					
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancelar"/>
                                <input type="submit" className="btn btn-success" value="Ingresar" onClick={registrarCliente}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Editar Cliente --> */}
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div>
                            <div className="modal-header">						
                                <h4 className="modal-title">Editar Cliente</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Nombre y Apellido</label>
                                    <input type="text" className="form-control" required onChange={(ev)=> setNombreApellido(ev.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required onChange={(ev)=> setEmail(ev.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Domicilio</label>
                                    <textarea className="form-control" required onChange={(ev)=> setDomicilio(ev.target.value)}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Celular</label>
                                    <input type="text" className="form-control" required onChange={(ev)=> setCelular(ev.target.value)}/>
                                </div>					
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancelar"/>
                                <input type="submit" className="btn btn-info" value="Guardar" onClick={modificarCliente}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Eliminar Cliente */}
            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div>
                            <div className="modal-header">						
                                <h4 className="modal-title">Eliminar Cliente</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <p>¿Estas Seguro que quieres eliminar este Cliente?</p>
                                <p className="text-warning"><small>Esta Accion no se puede volvear atras</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancelar"/>
                                <input type="submit" className="btn btn-danger" value="Eliminar" onClick={eliminarCliente}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

