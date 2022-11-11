import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination"
import { NoticiaCard } from "../../components/NoticiaCard/NoticiaCard"
import { api } from '../../services/api';
import { getRole, logout, isAuthenticated } from '../../services/auth';

import { useNavigate } from "react-router-dom";


type NoticiaCard = {
    id: Number,
    title: string,
    description: string,

}



export const Home = () => {

    const navigate = useNavigate();
    const auth = isAuthenticated();
    const user_role = getRole();

    const [data, setData] = useState<Array<NoticiaCard>>([]);

    useEffect(() => {
        api.get('/noticias/').then((response) => {
            setData(response.data)
            console.log(auth);
        })
    }, []);





    return (

        <div className="d-flex justify-content-around">


            <Link to="/criar/">
                <button className="btn btn-secondary">Adicionar</button>
            </Link>




            <div className="container">
                <div className="row">
                    {data.map((d, idx) => {
                        return (
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <NoticiaCard id={d.id} title={d.title} description={d.description} />
                            </div>
                        )
                    })}

                </div>








            </div>
        </div>



    )
}