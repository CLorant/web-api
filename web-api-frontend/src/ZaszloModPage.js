import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

export function ZaszloModPage(){
    const params = useParams();
    const id = params.zaszloId;
    const navigate = useNavigate();
    const[zaszlo,setzaszlo] = useState([]);
    const [modprice,setModprice]=useState('');
    const [modqty,setModqty]=useState('');
    const [modkepurl,setModkepurl]=useState('');
    const [modname,setModname]=useState('');
    useEffect(() => {
        (async () => {
            try {
        const res= await fetch(`https://localhost:5001/Zaszlok/${id}`)
        const zaszlo = await res.json();
            setzaszlo(zaszlo);
            setModname(zaszlo.name);
            setModprice(zaszlo.price);
            setModqty(zaszlo.qty);
            setModkepurl(zaszlo.flagimg);
        }
        catch(error) {
            console.log(error);
        }
    })
    ();
    }, [id,modname,modprice,modqty,modkepurl]);
    const modName=event=>{
        setModname(event.target.value);
    }
    const modPrice=event=>{
        setModprice(event.target.value);
    }
    const modQty=event=>{
        setModqty(event.target.value);
    }
    const modKepurl=event=>{
        setModkepurl(event.target.value);
    }
    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Termék Módosítása</h2>
            <form
            onSubmit={(event) => {
            event.persist();
            event.preventDefault();
            fetch(`https://localhost:5001/Zaszlok/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    Id: event.target.elements.id.value,
                    Name: event.target.elements.name.value,
                    Price: event.target.elements.price.value,
                    Qty: event.target.elements.qty.value,
                    Flagimg: event.target.elements.flagimg.value,
                }),
            })
            .then(() =>
            {
                navigate("/");
            })
            .catch(console.log);
            }}>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Id:</label>
                <div className="col-sm-9">
                <input type="text" name="id" className="form-control" value={zaszlo.id}/>
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Termék neve:</label>
                <div className="col-sm-9">
                <input type="text" name="name" className="form-control" defaultValue={zaszlo.name} onChange={modName}/>
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Ár:</label>
                <div className="col-sm-9">
                <input type="number" name="price" className="form-control" defaultValue={zaszlo.price} onChange={modPrice}/>
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Darab:</label>
                <div className="col-sm-9">
                <input type="number" name="qty" className="form-control" defaultValue={zaszlo.qty} onChange={modQty}/>
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Kép URL-je:</label>
                <div className="col-sm-9">
                <input type="text" name="flagimg" className="form-control" defaultValue={zaszlo.flagimg} onChange={modKepurl}/>
                </div>
            </div>
            <img src={zaszlo.flagimg} height="200px" alt={zaszlo.name}></img><br/><br/>
            <button type="submit" className="btn btn-success">
                Küldés
            </button>
            </form>
        </div>
    );
}
export default ZaszloModPage;