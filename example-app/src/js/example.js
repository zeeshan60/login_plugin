import {LoginPlugin} from 'zeenom';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    LoginPlugin.login({value: inputValue}).then(result => {
            console.log(result.value);
            document.getElementById("echoInput").value = result.value + " ";
            document.getElementById("description").textContent = result.value;
        }
    );
}