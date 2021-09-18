import React from 'react'

const Characters = ({characters=[]}) => {
    return (
        <div className="row">
            {
                characters.map((item,index)=>(
                    <div key={index} className="col mb-4">
                        <div div="card" syle={{mindWidth: "3 rem"}}>
                            <img src={item.image} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <hr/>
                                <p>Especie: {item.species}</p>
                                <p>location: {item.location.name}</p>
                            </div>
                        </div>

                    </div>
                ))
            }
            
        </div>
    )
}

export default Characters
