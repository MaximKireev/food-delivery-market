import React, {PureComponent} from 'react'
import { Button } from 'antd';
import Ranking from '../Ranking/Ranking'
import CommentsList from '../CommentsList/CommentsList'
import Menu from '../Menu/Menu'
import './Restaraunt.css'

export default class Restaraunt extends PureComponent {
    state = {
        commentID: null,
    }

    toggleComments(){
        this.setState({commentID: !this.state.commentID})
    }
    render() {
       const {commentID} = this.state
       const {id, image, name, menu, reviews} = this.props.restaraunt;
       const {isOpen, activeRestaraunt} = this.props;
       return (
       <React.Fragment>
           <li className="restaraunt-item"
               key = {id}>
               <div className="info-wrapper">
               <h1>{name}</h1>
               <img src={image} width={90} height = {80} alt=""/>
               </div>
               <Ranking className = 'ranking' ranking = {reviews} />
               <div className="menu-rewievs-wrapper">
               <Button
                   type="primary"
                   onClick = {() => activeRestaraunt(id)}>
                   {isOpen ? 'Hide menu' : 'Show menu'}
               </Button>
               <Button
                   type="primary"
                   onClick = {() => this.toggleComments(reviews[0].id)} >
                   {commentID ? 'Hide comments' : 'Show comments'}
               </Button>
               </div>
               { commentID ? <CommentsList reviews = {reviews}/> : null}

           </li>
           {isOpen? <Menu menu = {menu} /> : null }


       </React.Fragment>
   )
   }
}


