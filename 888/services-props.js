class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Title />
                <Services />
            </div>
        );
    }
}

class Menu extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div className="menu">
                <MenuItem text="SERVICES"></MenuItem>
                <MenuItem text="WORK"></MenuItem>
                <MenuItem text="THE TEAM"></MenuItem>
                <div></div>
            </div>
        );
    }
}

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this);
    }
    
    select(event) {
        var menuItems = document.querySelectorAll(".menu span");
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove("selected");
        }
        event.target.classList.add("selected");
    }
    
    render() {
        return (
            <span onClick={this.select}>{this.props.text}</span>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
            <div className="title">
                <h1>SERVICES</h1>
                <p>
                    our vision is simple, we want to create websites and applications with both high quality
                    design and easy-to-access content. The finished product will be totaly unique and awesome.
                </p>
            </div>
        );
    }
}

class Services extends React.Component {
    render() {
        return (
            <div id="services">
                <Service
                    colorClass="blue"
                    src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
                    title="USER INTERFACE" items={["Wireframing", "Prototyping", "Usability Testing"]}
                />
                <Service
                    colorClass="green"
                    src="http://simpleicon.com/wp-content/uploads/rocket.png"
                    title="CONCEPT AND IDEAS" items={["Conceptualization", "Digital Planning", "Product Strategy"]}
                />
                <Service
                    colorClass="lilac"
                    src="https://openclipart.org/image/2400px/svg_to_png/213252/Gear-icon.png"
                    title="DESIGN AND BRANDING" items={["Interactive Design", "Graphic Design", "Unique Strategy"]}
                />
            </div>
        );
    }
}

class Service extends React.Component {
    render() {
        return (
            <div className="service">
                <Icon colorClass={this.props.colorClass} src={this.props.src} />
                <Description title={this.props.title} items={this.props.items} />
            </div >
        );
    }
}

class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.changeBackground = this.changeBackground.bind(this);
        this.fade = this.fade.bind(this);
    }
    changeBackground() {
        document.querySelector(this.getClassName()).classList.add("strong");
    }  
    fade() {
        document.querySelector(this.getClassName()).classList.remove("strong");
    }
    getClassName() {
        return ".icon-wrapper." + this.props.colorClass;
    }
    render() {
        return (
            <div onMouseEnter={this.changeBackground} onMouseLeave={this.fade}
                className={"icon-wrapper " + this.props.colorClass}>
                <img src={this.props.src} />
            </div >
        );
    }
}

class Description extends React.Component {
    constructor() {
        super();
        this.enlarge = this.emphasize.bind(this);
    }
    emphasize(event) {
        event.target.classList.add("border");
        var element = event.target;
        setTimeout(function () {
            element.classList.remove("border");
        }, 1000);
    }
    render() {
        return (
            <div className="title">
                <h5 onMouseEnter={this.emphasize}>{this.props.title}</h5>
                <div>{this.props.items[0]}</div>
                <div>{this.props.items[1]}</div>
                <div>{this.props.items[2]}</div>
            </div>
        );
    }
}

function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}

// invoking the render function
render();