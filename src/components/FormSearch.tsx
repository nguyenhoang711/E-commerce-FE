import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

interface CustomFormSearchProps {
    title: string
    handleOnchange: (keyword: string) => void
    handleSearch: (keyword: string) => void
}

const FormSearch = (props: CustomFormSearchProps) => {
    const [keyword, setkeyword] = useState('')

    let handleSearchProduct = () =>{
        props.handleSearch(keyword)
    }
    let handleOnchange = (keyword:string)=>{
        setkeyword(keyword)
        props.handleOnchange(keyword)
    }


    return (
        <form   >
        <div className="form-group">
            <div className="input-group mb-3">
                <input onChange={(e) => handleOnchange(e.target.value)} value={keyword} type="text" className="form-control" placeholder={`Tìm kiếm theo ${props.title}`} />
                <div className="input-group-append">
                    <button onClick={() =>handleSearchProduct()}  className="btn" type="button"><i className="ti-search" /></button>
                </div>
            </div>
        </div>
        
        </form>
    )
}
export default FormSearch;



