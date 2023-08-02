import React from 'react'

const Newsitem =(props)=>{
 
    let {title , description , url , newsurl, author ,source,  date}=props
    return (
      <div>
       
        <div className="card" style={{ marginBottom:'3rem'}}>
       
  <img src={url ?url:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
  <span class="badge text-bg-danger"style={{marginBottom:"1rem"}} >{source}</span>
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small class="text-body-secondary">By {author ? author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
  </div>
    <a href={newsurl} className="btn btn-sm btn-dark">Explore</a>
  </div>
</div>
    
    )
  }

export default Newsitem