import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from "react-redux"
import * as toggleactionCreators from '../actions/toggleActions';

function mapStateToProps(state) {
  return {
    hidden: state.toggle.hidden
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({...toggleactionCreators}, dispatch)
}

class Main extends React.Component {

  toggleDiv() {
    this.props.toggleDiv();
  }

  render() {
    const { hidden} = this.props;
    return (
      <div>
      <button onClick={this.toggleDiv.bind(this)}>Click</button>
      <div className={ hidden ? null : "toggled"}>
        <h1>helllllloooo</h1>
      </div>
    </div>
    )    
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Main);

