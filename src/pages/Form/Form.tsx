
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import './index.scss'
import { getRole } from '../../services/auth'

export const Form = () => {
    const user_role = getRole();

    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');


    useEffect(() => {
        if (id) {
            api.get('/find/' + id).then((response) => {
                const noticia = response.data;
                setTitle(noticia.title);
                setDescription(noticia.description);
                setInputTitle(noticia.title);
                setInputDescription(noticia.description);


            })
        }

    }, [id])


    const put = (event: any) => {
        event.preventDefault();
        const data = {
            title: inputTitle,
            description: inputDescription,


        }

        api.put(`/editar/${id}`, data).then(response => {

            console.log(response);
        })
    }

    const post = (event: any) => {
        event.preventDefault();
        const data = {
            title: inputTitle,
            description: inputDescription,
        }
        api.post("/criar/", data).then(response => {
            console.log(response);
        })

    }

    const deleteData = (event: any) => {
        event.preventDefault();
        api.delete(`/deletar/${id}`).then(response => {
            console.log(response);
        })
    }


    return (
        <div className="form-container">

            <form className="form">

                <div className="group-name">
                    <label htmlFor="title">Titulo</label>
                    <input id="title" required className="form-control" value={inputTitle} onChange={(e) => { setInputTitle(e.target.value) }} />
                </div>
                <div className="group-brand">
                    <label htmlFor="description">Descricao</label>
                    <input id="description" required className="form-control" value={inputDescription} onChange={(e) => { setInputDescription(e.target.value) }} />
                </div>
                <button onClick={put} type="submit" className="btn btn-primary">Salvar</button>
                <button onClick={deleteData} type="submit" className="btn btn-danger">Deletar</button>



                <Link to="/">
                    <button className="btn btn-primary">Cancelar</button>

                </Link>


            </form >

        </div >
    )
}
