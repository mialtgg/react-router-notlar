import { Link } from "react-router-dom";

function Page404(){
    return(
        <div>
            <h1>Sayfa bulunamadı</h1>
            <Link to="/">Ana sayfaya dön</Link>

        </div>
    )
}
export default Page404;