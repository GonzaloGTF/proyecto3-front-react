import { useEffect, useState } from "react";
import { deleteCommentFetch, searchComments } from "../services/contacto";

export function getComments() {
    const [comments, setComments] = useState(null)


    useEffect(() => {
        searchComments(setComments)
    }, []);


    function deleteComment(com) {
        deleteCommentFetch(com._id)
        const deleteCom = comments.filter(comment => comment._id !== com._id);
        setComments(deleteCom)
    }

    return { getComments, deleteComment, comments }
}