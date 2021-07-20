import React from "react"
import {connect} from 'react-redux'

class Table extends React.Component {
render(){
    const {users}=this.props
    console.log("prop",users)
    const userList=users.length?(
            users.map((item, index) => {
                return(
                    <tbody key={index}> 
                
                <tr id={item.name}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>{item.image}</td>
                </tr> 
                </tbody>
                )
            })
    ):(
        <div className="center">no connections to show!!!</div> 
    )
    return (
            <div className="container">
                <table class="table">
            <thead>
        <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Image</th>
    </tr>
        </thead>
        {userList}
    </table>
    </div>
    )
}
}
const mapStateToProps = state => {
  return {
      users: state.users
  }
}

export default connect(mapStateToProps)(Table);
