import React from 'react'
import { slide as Menu } from "react-burger-menu";
import logo from '../assets/Logo.png'

const Sidebar = (props) => {
            const state = {...props};
            return  (
                // Pass on our props
                <Menu customBurgerIcon = {        
                    <span>
                        <span className="bm-burger-bars custom first"></span>
                        <span className="bm-burger-bars custom second"></span>
                        <span className="bm-burger-bars custom third"></span>
                    </span>}
                    isOpen={state.isOpenMenu} onOpen={()=>state.setIsOpenMenu(true)}
                    onClose={()=>state.setIsOpenMenu(false)} right>
                    <div className= "navbar-header">
                        <img src = {logo} alt = ""></img>
                    </div>
                    <div className = "seperator"/>
                    <div>
                        <button onClick = {()=>handleShowModal('ModalGS')} className="btn">
                            חיפוש תחנת דלק בקרבתי   
                        </button>
                        <i className="fas fa-street-view"/>
                    </div>
                    <div>
                        <button onClick = {()=>handleShowModal('ModalFilterGS')} className="btn">
                            סינון תחנות דלק
                        </button>
                        <i className="fas fa-filter"/>
                    </div> 
                    <div className = "seperator"/>
                    <div>
                        <button onClick = {()=>handleShowModal('ModalAddGS')} className="btn">
                        הוספת תחנת דלק
                        </button>
                        <i className="fas fa-plus"/>
                    </div>
                    <div>
                        <button onClick = {handleShowModal} className="btn">
                        הסרת תחנת דלק
                        </button>
                        <i className="fas fa-trash-alt"/>
                    </div> 
                </Menu>
              );
              
              function handleShowModal(modalName) {
                state.setIsOpenMenu(false);
                switch(modalName) {
                    case "ModalGS":
                        state.setShow(true);
                        break;
                    case "ModalFilterGS":
                        state.setShowModalFilterGS(true);
                        break;
                    case "ModalAddGS":
                        state.setShowModalAddGS(true);
                        break;
                    default:
                        break;
                }
              }
}
 
export default Sidebar;
