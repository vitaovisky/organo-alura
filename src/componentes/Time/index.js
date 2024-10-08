import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({time, colaboradores, aoDeletar, mudarCor}) => {

    return(
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.5') }}>
            <input type='color' value={time.cor} onChange={evento => mudarCor(evento.target.value, time.id)} className='input-cor'/>
            <h3 style={{ borderColor: time.cor}}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={aoDeletar}/>)}
            </div>
        </section>
        
    )
}

export default Time