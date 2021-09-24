import {Component} from "react";

const withToggle = (RestarauntComponent) => {
    return class extends Component {
        state = {
        isOpen : null,
        }
        setActiveReastaraunt(id){
            this.setState(
                {isOpen: id})
        }

        render() {
            const {isOpen} = this.state;
           
            return (
                <RestarauntComponent {...this.props}
                isOpen = {isOpen}
                activeRestaraunt = {(id) => this.setActiveReastaraunt(id)}
                />
            );
        }
    }
}

export default withToggle