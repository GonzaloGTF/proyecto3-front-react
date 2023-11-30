import { useContext, useState } from "react"
import UserContext from "../UserContext";

export default function UpdateUser() {
    const { user, setUser, setError, error } = useContext(UserContext)
    const [image, setImage] = useState(null);

    const handleImgChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };

    const handleImgSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', image);
        formData.append('userId', user._id);

        await fetch('http://localhost:3000/users/img', {
            method: 'PUT',
            body: formData,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(res => {

                if (res._id) {
                    setError(null)
                    setUser(res)

                }
                else {
                    setError(res.message)
                }
            })
            .catch((e) => console.log(e))

    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Configuracion de cuenta</h1>

            <div id="avatar" className="flex items-center">
                <form onSubmit={handleImgSubmit}>
                    <input type="file" accept="image/*" onChange={handleImgChange} className="file-input file-input-bordered file-input-sm file-input-info w-[500px]" />
                    <button type="submit" className="btn btn-info btn-sm ml-5">Subir Imagen</button>
                </form>

                <div className="avatar m-5">
                    <div className="w-24 rounded-full ring">
                        {user?.imgUrl != null ? (
                            <img src={user.imgUrl} />
                        ) : (
                            <i className="material-icons text-8xl ">account_circle</i>
                        )}
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    );
};
