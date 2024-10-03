import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const estiloContainer = {backgroundColor:props.corSecundaria}

    return(
        props.colaboradores.length > 0 && <section className='time' style={estiloContainer}>
            <h3 style={{borderBottomColor:props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} imagem={colaborador.imagem} cargo={colaborador.cargo} corDoCard={props.corPrimaria}/> )}
            </div>
        </section>
    )
}

export default Time