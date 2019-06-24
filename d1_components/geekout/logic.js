class SiteBody extends React.Component {
    render() {
        return (
            <div className="SiteBody">

                <SiteHeader />
                <MainSite />

            </div>
        );
    }
}
class SiteHeader extends React.Component {
    render() {
        return (
            <div className="SiteHeader">
                <Today />
            </div>
        );
    }
}
class Today extends React.Component {
    render() {
        return (
            <div className="Today">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                         <i className="fas fa-sun fa-10x sun"></i>

                        </div>
                        <div className="col-sm">
                                
                                <WeatherToday/>

                        </div>
                        
                    </div>
                </div>




            </div>
        );
    }
}

class MainSite extends React.Component {
    render() {
        return (
            <div className="MainSite">
                <Tomorrow />
                <InTwoDays />
                <In3Days />
            </div>
        );
    }
}
class Tomorrow extends React.Component {
    render() {
        return (
            <div className="Tomorrow">

            </div>
        );
    }
}
class InTwoDays extends React.Component {
    render() {
        return (
            <div className="MainSite">

            </div>
        );
    }
}
class In3Days extends React.Component {
    render() {
        return (
            <div className="MainSite">

            </div>
        );
    }
}
class WeatherToday extends React.Component {
    render() {
        return (
            <div className="WeatherToday">
                <div className="container">
    <div className="row">
            country
    </div>

    <div className="row">
        city
    </div>

    <div className="row">
            filllike
    </div>
  </div>
  
            </div>
        );
    }
}





ReactDOM.render(
    <div>     <SiteBody />      </div>,
    document.getElementById("root")
);