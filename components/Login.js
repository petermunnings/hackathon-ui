const loginStyle = {
  margin: 'auto',
  width: '30%',
  padding: '10px',
  textAlign: 'center',
  border: '1px'
}

const tableStyle = {
  margin: 'auto',
  padding: '20px',
}

const inputStyle = {
  height: '28px',	
  width: '200px',	
  fontSize: '18px',
  lineHeight: '10px',
	textAlign: 'center',
  borderRadius: '10px',
  borderWidth: '0px'
}

const buttonStyle = {
  height: '40px',	
  width: '160px',	
  borderRadius: '10px',
  borderWidth: '0px',
  fontSize: '18px',
}

const Login = () => (
    <div style={loginStyle}>
        <img src='/static/santander.png' />
        <table style={tableStyle}>
          <tr>
            <td style={tableStyle}>Username</td>
            <td style={tableStyle}><input style={inputStyle} /></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input style={inputStyle} type='password' /></td>
          </tr>
          <tr>
            <td></td>
            <td style={tableStyle}><button style={buttonStyle}>Submit</button></td>
          </tr>
        </table>
    </div>
)

export default Login
