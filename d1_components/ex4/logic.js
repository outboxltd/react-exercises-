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

                <NavBar />

            </div>
        );
    }
}
class NavBar extends React.Component {
    render() {
        return (
            <div className="NavBar">

                <LinksArea />

            </div>
        );
    }
}

class LinksArea extends React.Component {
    render() {
        return (
            <div className="LinksArea">

                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">the team</a>
                    </li>

                </ul>

            </div>
        );
    }
}


class MainSite extends React.Component {
    render() {
        return (
            <div className="MainSite">
                <ServiceText/>

                <div className="row">
                    <div clclassNameass="cocol-sm-3"> <TheImages /> </div>
                    <div clclassNameass="col-sm-3"> <TheImages /> </div>
                    <div clclassNameass="col-sm-3"> <TheImages /> </div>


                </div>



            </div>
        );
    }
}

class ServiceText extends React.Component {
    render() {
        return (
            <div className="ServiceText">
                <h1 className="text-center">Service</h1>
                <h5 className="text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum blanditiis nulla perferendis provident eos qui distinctio, assumenda modi facere ducimus. Officiis autem excepturi voluptate quae praesentium corporis blanditiis accusantium ea.
            </h5>


            </div>
        );
    }
}

//

class TheImages extends React.Component {
    render() {
        return (
            <div className="TheImages">

               


                <img src="https://kacabiru.files.wordpress.com/2010/11/smilelaughuy0.png" alt="..." className="rounded mx-auto d-block"></img>


                


                    


                </div>
                );
            }
        }





        ReactDOM.render(
    <div>     <SiteBody />      </div>,
                            document.getElementById("root")
);