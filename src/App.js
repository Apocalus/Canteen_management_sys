import './App.css';

function App() {

  // checking user --- ****do from db****
  const checkUser = () => {
    // alert("Testing")
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    // alert(`Username: ${user} Password: ${pass}`);
    if (user == 'beea' & pass == 'beea'){
      alert("Bingo") //works - redirect to homepage
    }
    else{
      alert("Incorrect login")
    }
  }


  return (
    <div className="App">
      <div class="login-box">
        <h1>CANTEEN MANAGEMENT SYSTEM</h1>
        <p>LOGIN</p>
        <form>
          <div class="user-box">
            <input type="text" id="username" name="username" required/>
            <label for="username">USERNAME</label>
          </div>
          <div class="user-box">
            <input type="password" id="password" name="password" required/>
            <label for="password">PASSWORD</label>
          </div>
          <button type='button' onClick={checkUser}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
