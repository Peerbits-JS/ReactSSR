import React from 'react'
import { withRouter } from 'react-router';
import MetaTag from './Meta';
import { useHistory } from 'react-router-dom';

class War extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            path:''
        }
    }

    componentDidMount() {
        console.log("Component Mounted",this.props);
    }
    componentWillMount() {
      this.unlisten = this.props.history.listen((location, action) => {
          console.log("on route change", this.props);
          console.log("on route change", location);
          this.setState({ path: location.pathname });
      });
    }
    getMetaTag() {
        console.log('META');
    }
    componentWillUnmount() {
        this.unlisten();
    }
    render() {
        console.log("HERE TO UPDATE")
       return (
           <div>
                <MetaTag path={this.state.path} />
               {this.props.children}
           </div>
        );
    }
  }
  export default withRouter(War);
  