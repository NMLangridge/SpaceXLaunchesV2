import React from 'react'

class Reload extends React.Component {

    function refreshPage() {
		window.location.reload(false);
	}

    render() {
        return(
        	<div>
		    	<button onClick={refreshPage}>Click to Reload</button>
		    </div>    
        )  
    }
}

export default Reload;
