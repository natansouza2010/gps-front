import { Link } from 'react-router-dom';
import './index.scss';


type NoticiaCard = {
    id: Number,
    title: string,
    description: string,

}


export const NoticiaCard = (props: NoticiaCard) => {
    return (
        <Link style={{ textDecoration: 'none' }} to={`/veiculos/edit/${props.id}`}>
            <div className="card">
                <div className="container">
                    <h4>{props.title}</h4>
                    <h3>R$ {(props.description)}</h3>

                </div>
            </div>
        </Link>)
}