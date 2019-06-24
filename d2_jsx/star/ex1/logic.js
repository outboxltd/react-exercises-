function render() { 
    ReactDOM.render(
        <div>

            <a href="{data.linkAddress}"> {data.linkText}</a>
            <input type="range" min={data.min} max={data.max}></input>
            <button>{data.buttonText}</button>






        </div>,
        document.getElementById("root")
    );
    
}

var data = {
    linkAddress: "https://www.google.com/",
    linkText: "google",
    min: -5,
    max: 5,
   
    buttonText: "click me"
}; 

render();

