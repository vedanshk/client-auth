import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from "../../actions"
function SignOut(props) {
 
    useEffect(()=>{
        props.signout();
    },[])

  return (
    <div>SignOut</div>
  )
}

export default connect(null , actions)(SignOut);