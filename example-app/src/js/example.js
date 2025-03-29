import { LoginPlugin } from 'zeenom';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    LoginPlugin.echo({ value: inputValue })
}
