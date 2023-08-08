import { useParams } from "react-router-dom"
import useStock from "../../hooks/useStock"
import ItemForm from "../../components/ItemForm";

export default function UpdateItem() {
    const {id} = useParams()
    const {getItem} = useStock()
    const item = getItem(id)
    return (
        <>
            <h2>Atualizar item</h2>
            <ItemForm itemToUpdate={item} />
        </>
    )
}