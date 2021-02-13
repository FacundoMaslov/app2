import React from "react";

const List = (props) => {
    const { data, deleteUser } = props;

    return (
        <div>
            <h2>Socios</h2>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>edad</th>
                    </tr>
                </thead>

                <tbody>
                    {data.length > 0 ?
                        data.map((data) => (
                            <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.surname}</td>
                                <td>{data.age}</td>
                                <button onClick={() => deleteUser(data.id)}>Delete</button>

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