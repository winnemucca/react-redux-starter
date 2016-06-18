// this component handles the app template used on every page

import React, {Proptypes} from 'react';

class App extends React.Component {
    render() {

         return (
            <div className ="container-fluid" >
                <p> Header here</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: Proptypes.object.isRequired
};

export default App;

