import React, {Component} from 'react';
import Restaraunt from  '../Restaraunt/Restaraunt';
import withToggle from "../hoc-components/withToggle";


class RestarauntsList extends Component{

    render() {
        const {restaurants, isOpen, activeRestaraunt} = this.props;

        return (
            <div>
                <ul className='restaraunts-list'>
                    {restaurants.map(restaraunt =>
                        <Restaraunt
                            key = {restaraunt.id}
                            restaraunt = {restaraunt}
                            isOpen = {isOpen === restaraunt.id}
                            activeRestaraunt = {activeRestaraunt}

                        />
                    )}
                </ul>
            </div>

        )
    }
}
export default withToggle(RestarauntsList)
