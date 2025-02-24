const User = ({data}) => {
    return(
        <div style={{
            border: "1px solid aliceblue"
        }}>
            <h3>Name: <span style={{color:"#CDC"}}>{data.name}</span></h3>
            <h3>ID: <span style={{color:"#CDC"}}>{data.id}</span></h3>
            <h3>Age: <span style={{color:"#CDC"}}>{data.Age}</span></h3>
            <h3>Email: <span style={{color:"#CDC"}}>{data.Email}</span></h3>
        </div>
    )
}

export default User;