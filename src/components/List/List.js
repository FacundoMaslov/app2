import React from "react";
import "./List.scss"

const List = (props) => {
    const { data, deleteUser } = props;

    return (
        <div className="container_list">
            <h2 className="container_list_group">Socios</h2>

            <table className="container_list_group">
                <thead className="container_list_group_item">
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>edad</th>
                    </tr>
                </thead>

                <tbody className="container_list_group_item">
                    {data.length > 0 ?
                        data.map((data) => (
                            <tr key={data.id} className="container_list_group_item_tbody">
                                <td>{data.name}</td>
                                <td>{data.surname}</td>
                                <td>{data.age}</td>
                                <button className="container_list_group_item_tbody_button" onClick={() => deleteUser(data.id)}>Delete</button>

                            </tr>
                        )) :
                        <tr>
                            <td colSpan="3">No hay socios......</td>
                        </tr>
                    }

                </tbody>
            </table>
        </div>
    )
}

export default List;