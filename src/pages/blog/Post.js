import { useParams } from "react-router-dom";
function Post() {
    const params=useParams()
    console.log(params)
    return (
        <div>
            post page
        </div>
    )
}
export default Post;