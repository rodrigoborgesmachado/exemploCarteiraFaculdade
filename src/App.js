import QRCodeComponent from "./Components/qrcode";
import { useState } from "react";
import Modal from 'react-modal';

function App() {
  const[nome, setNome] = useState(sessionStorage.getItem('nome') ? sessionStorage.getItem('nome') : 'José Alves Silva');
  const[faculdade, setFaculdade] = useState(sessionStorage.getItem('faculdade') ? sessionStorage.getItem('faculdade') : 'UNITRI');
  const[curso, setCurso] = useState(sessionStorage.getItem('curso') ? sessionStorage.getItem('curso') : 'Engenharia Civil');
  const[dataNascimento, setDataNascimento] = useState(sessionStorage.getItem('dataNascimento') ? sessionStorage.getItem('dataNascimento') : '01/01/1998');
  const[rg, setRg] = useState(sessionStorage.getItem('rg') ? sessionStorage.getItem('rg') : '00.000.000-MG');
  const[cpf, setCpf] = useState(sessionStorage.getItem('cpf') ? sessionStorage.getItem('cpf') : '000.000.000-00');
  const[codigo, setCodigo] = useState(sessionStorage.getItem('codigo') ? sessionStorage.getItem('codigo') : 'ABC152145212');
  const[validade, setValidade] = useState(sessionStorage.getItem('validade') ? sessionStorage.getItem('validade') : '12/12/2024');
  const[qrCode, setQrCode] = useState(sessionStorage.getItem('qrCode') ? sessionStorage.getItem('qrCode') : 'https://unitri.edu.br/');

  const[modalIsOpen, setModalIsOpen] = useState(false);
  const[dado, setDado] = useState('');

  function openModal(){
    setModalIsOpen(true);
  }

  function closeModal(){
    setModalIsOpen(false);
  }

  function customStyles(){
      return {
          content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              background: '#A7C8D6',
              border: '0',
              marginRight: '-50%',
              borderRadius: '5px',
              transform: 'translate(-50%, -50%)',
              width: '40%',
              overflow: 'auto',
              position: 'fixed',
              zIndex: 1000
          },
          overlay: {
            zIndex: 1000 
          }
      };
  }

  function chooseImageUser(event) {
    const file = event.target.files[0]; // Get the selected file
    const reader = new FileReader(); // Create a FileReader instance
  
    reader.onload = function(event) {
      // Set the background image of the userImage div
      document.getElementById('userImage').style.backgroundImage = `url('${event.target.result}')`;
    };
  
    // Read the selected file as a Data URL
    reader.readAsDataURL(file);
  }

  function chooseImageUniversity(event) {
    const file = event.target.files[0]; // Get the selected file
    const reader = new FileReader(); // Create a FileReader instance
  
    reader.onload = function(event) {
      // Set the background image of the userImage div
      document.getElementById('imageUniversity').style.backgroundImage = `url('${event.target.result}')`;
    };
  
    // Read the selected file as a Data URL
    reader.readAsDataURL(file);
  }

  function setInformacao(valor){
    localStorage.setItem(dado, valor);
  }

  return (
    <div className="App">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles()}
        contentLabel="Questão"
      >
        <div className='contextModal'>
          <div className="informacoesModal">
            <h3>Informação {dado}:</h3>
            {
              dado == 'nome' ?
              <input className="input" type="text" value={nome} onChange={(e) => {setNome(e.target.value); setInformacao(e.target.value);}}/>
              :
              dado == 'curso' ?
              <input className="input" type="text" value={curso} onChange={(e) => {setCurso(e.target.value); setInformacao(e.target.value);}}/>
              :
              dado == 'dataNascimento' ?
              <input className="input" type="date" value={dataNascimento} onChange={(e) => {setDataNascimento(e.target.value); setInformacao(e.target.value);}}/>
              :
              dado == 'rg' ?
              <input className="input" type="text" value={rg} onChange={(e) => {setRg(e.target.value); setInformacao(e.target.value);}}/>
              :
              dado == 'cpf' ?
              <input className="input" type="text" value={cpf} onChange={(e) => {setCpf(e.target.value); setInformacao(e.target.value);}}/>
              :
              dado == 'codigo' ?
              <input className="input" type="text" value={codigo} onChange={(e) => {setCodigo(e.target.value); setInformacao(e.target.value);}}/>
              :
              dado == 'validade' ?
              <input className="input" type="text" value={validade} onChange={(e) => {setValidade(e.target.value); setInformacao(e.target.value);}}/>
              :
              dado == 'qrCode' ?
              <input className="input" type="text" value={qrCode} onChange={(e) => {setQrCode(e.target.value); setInformacao(e.target.value);}}/>
              :
              dado == 'faculdade' ?
              <input className="input" type="text" value={faculdade} onChange={(e) => {setFaculdade(e.target.value); setInformacao(e.target.value);}}/>
              :
              dado == 'imageUser' ?
              <input id="fileInput" type="file" accept="image/*" onChange={(e) => {chooseImageUser(e);}}/>
              :
              dado == 'imageUniversity' ?
              <input id="fileInput" type="file" accept="image/*" onChange={(e) => {chooseImageUniversity(e);}}/>
              :
              <></>
            }
          </div>
          <button onClick={() => closeModal()}>Confirma</button>
        </div>
      </Modal>
      <div className="Carteirinha">
        <div className="left-side">
          <h2><p onClick={() => {setDado('faculdade');openModal()}}>{faculdade}</p></h2>
          <div className="userImage" id="userImage" onClick={() => {setDado('imageUser');openModal();}}/>
          <div className="qrcode" onClick={() => {setDado('qrCode');openModal();}}>
            <QRCodeComponent text={qrCode}/>
          </div>
        </div>
        <div className="middle-side">
          <div className="dados">
            <h1>
              <p onClick={() => {setDado('nome');openModal()}}>{nome}</p>
              <br/>
              <p onClick={() => {setDado('curso');openModal()}}>Curso: {curso}</p>
              <br/>
              <p onClick={() => {setDado('dataNascimento');openModal()}}>Data Nascimento: {dataNascimento}</p>
              <br/>
              <p onClick={() => {setDado('rg');openModal()}}>Rg: {rg}</p>
              <br/>
              <p onClick={() => {setDado('cpf');openModal()}}>CPF: {cpf}</p>
              </h1>
              <h2>
                <p onClick={() => {setDado('codigo');openModal()}}>Código: {codigo}</p>
              </h2>
          </div>
        </div>
        <div className="right-side">
          <div className="infoRightSide">
            <div className="imageUntri" id="imageUniversity" onClick={() => {setDado('imageUniversity');openModal();}}/>
            <div className="infoRight">
              <h4>
                <p onClick={() => {setDado('validade');openModal()}}>Validade: {validade}</p>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
