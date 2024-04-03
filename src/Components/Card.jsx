import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function CardProject( {img,title,description,srcproject,srcgithub}) {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button 
          variant="primary"
          style={{margin:'5px'}}
          ><a href={srcproject} style={{color:'#fff', fontWeight:600  }}>Visitar Projeto</a></Button>
          <Button 
          variant="primary"
          style={{margin:'5px'}}
          > <a href={srcgithub} style={{color:'#fff', fontWeight:600  }}>Repositorio</a> </Button>
        </Card.Body>
      </Card>

     
    </div>
  );
}
CardProject.PropTypes ={
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    srcproject:PropTypes.string.isRequired,
    srcgithub:PropTypes.string.isRequired
}
export default CardProject