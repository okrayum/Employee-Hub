import ButtonDiv from "../ButtonDiv"
import "../../styles/Post.css"

const Post = (props) => {
    // console.log("POST PROPS ",props.post.createdAt)

    // let postedDate = props.post.createdAt
    // let now = new Date().getTime()
    // let compareDate = new Date('2023/4/24').getTime()
    // let testDate = compareDate - now

    // let age = (Math.abs((new Date(postedDate).getTime()) - (new Date().getTime()))) / 1000 / 60 / 60 / 24 

    // console.log("here ", Math.trunc(age))
    // console.log((Math.abs(testDate)) / 1000 / 60 / 60 / 24)

    // console.log( (Math.abs((new Date('2023/4/24').getTime()) - (new Date().getTime()))) / 1000 / 60 / 60 / 24 )

    // console.log( (Math.abs((new Date(postedDate).getTime()) - (new Date().getTime()))) / 1000 / 60 / 60 / 24 )

    

    return (
        <div className="postWrapper">
            <div className="postDiv">

                <div className="titleBodyDiv">
                    <h1 className="cardTitle">{props.post.title}</h1>
                    <h2>{props.post.body}</h2>
                </div>

                <div className="postedByOnDiv">
               
                <h4>Posted by: {props.post.userId.firstName} {props.post.userId.lastName}</h4>
                
            
                <h4>Posted on: {new Date(props.post.createdAt).toLocaleString()}</h4>
                </div>

                <ButtonDiv post={props.post} />
            </div>
        </div>
    )
}

export default Post