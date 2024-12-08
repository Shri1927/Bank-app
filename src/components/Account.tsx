import React from "react";
import { ActionButtons } from "./ActionButtons";
import { formatNumber } from "./Utils";

export const Account = (props: { type: any; accountNumber: number; balance: number; fullname: string; editingUser: any; setEditingUser: any; setDeleteUser: any; index: number; isAdmin: any; setEditModal: any; }) => {
    
    const {type, accountNumber, balance, fullname, editingUser, setEditingUser, setDeleteUser, index, isAdmin, setEditModal} = props;
    
    const action = isAdmin ? <ActionButtons index={index} 
      editingUser={editingUser} 
      setEditingUser={setEditingUser} 
      setEditModal={setEditModal} setDeleteUser={setDeleteUser} /> : '';
    
    return (
      <div className="account">
          <div className="details">
              <AccountHolder fullname={fullname} />
              <AccountType type={type} />
              <AccountNumber accountNumber={accountNumber} />
              {action}
          </div>
          <AccountBalance balance={formatNumber(balance)} />
      </div>
    )
  }
  
export const AccountHolder = (props: { fullname: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
    return (
      <h1>{props.fullname}</h1>
    )
  }
  
  
export const AccountType = (props: { type: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
    return (
      <h3>{props.type}</h3>
    )
  }
  
  
export const AccountNumber = (props: { accountNumber: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
    return (
      <div>{props.accountNumber}</div>
    )
  }
  
  
export const AccountBalance = (props: { balance: any; }) => {
    const balance = props.balance;
    return (
      <div className="balance">{balance}</div>
    )
  }

