import {Comment} from "antd";

const CommentsList = (props) => {

    return(
        <div>
            {props.reviews.map(review => <Comment
                avatar = { "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
                author={<a>{review.user}</a>}
                content={<p>{review.text}</p>}
            />)}

        </div>
    )
}
export default CommentsList