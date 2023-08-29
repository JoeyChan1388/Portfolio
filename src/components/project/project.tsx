import './Project.css'

const Project = (props: {img: any, name: string, description: string, url: string|undefined}) => {
  return (
    <>
      <div className="portfolio__project__item" data-aos="fade-up">
        <div className="portfolio__project__item__image">
            <div className="image__container">
                <img src={props.img || 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'}></img>
            </div>
        </div>
        <div className="portfolio__project__item__text">
            <h3>
                {props.name}
            </h3>
            <p>
                {props.description}
            </p>
            <div style={{flex: 1}}></div>
            {props.url ? <a href={props.url}><button><i className="fa-brands fa-github"></i> Code </button></a> : <></>}
        </div>
      </div>
    </>
  );
};

export default Project;
