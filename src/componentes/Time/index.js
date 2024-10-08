import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({time, colaboradores, aoDeletar, mudarCor}) => {

    return(
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corSecundaria }}>
            <input type='color' value={time.corSecundaria} onChange={evento => mudarCor(evento.target.value, time.nome)} className='input-cor'/>
            <h3 style={{ borderColor: time.corPrimaria}}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corPrimaria} aoDeletar={aoDeletar}/>)}
            </div>
        </section>
        
    )
}

export default Time