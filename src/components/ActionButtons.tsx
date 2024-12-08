import React from "react";

export const ActionButtons = (props: { editingUser: any; setEditingUser: any; index: number; setEditModal: any; setDeleteUser: any; }) => {
    const {editingUser, setEditingUser, index, setEditModal, setDeleteUser} = props;

    return (
      <div id="actions">
        <ActionButton 
          icon="bx bx-edit"
          text="Edit"
          index={index}
          actionType="edit"
          editingUser={editingUser}
          setEditingUser={setEditingUser} setEditModal={setEditModal} setDeleteUser={undefined} />

        <ActionButton 
          icon="bx bxs-x-square"
          index={index}
          actionType='delete'
          text="Delete" editingUser={editingUser}
          setDeleteUser={setDeleteUser} setEditingUser={undefined} setEditModal={undefined} />
      </div>
    )
  }
  
export const ActionButton = (props: { icon: any; text: any; editingUser: any; actionType: any; setEditingUser: any; index: any; setEditModal: any; setDeleteUser: any; }) => {
    const {icon, text, editingUser, actionType, setEditingUser, index, setEditModal, setDeleteUser} = props;

    const click = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: any) => {
      e.preventDefault();
      
      if(actionType === 'edit') {
        setEditingUser(index);
        setEditModal(true);
      }

      if(actionType === 'delete') {
        setDeleteUser(index);
      }
    }

    return (
      <button onClick={(e) => click(e, index)}><i className={icon} ></i> {text}</button>
    )
  }
