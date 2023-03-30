import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./criarProdutos.css"

function criarProdutos() {
  return (
    <Form>
        <div className='formContainer'>

        <h1 className='formTitulo'>Cadastrar produto</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="digite o nome do produto" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicColor">
        <Form.Label>Cor</Form.Label>
        <Form.Control type="" placeholder="digite a cor do produto" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCost">
        <Form.Label>Preço</Form.Label>
        <Form.Control type="cost" placeholder="digite o preço do produto" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Imagem</Form.Label>
        <Form.Control type="text" placeholder="Coloque a imagem do produto" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Cadastrar produto
      </Button>
        </div>


    </Form>
  );
}

export default criarProdutos;