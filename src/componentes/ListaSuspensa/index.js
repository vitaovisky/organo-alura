import './ListaSuspensa.css'

const ListaSuspensa = ({label, itens,  valor, aoAlterado, obrigatorio = false}) =>{
    return(
        <div className='listasuspensa'>
            <label>{label}</label>
            <select 
                required={obrigatorio}
                onChange={evento => aoAlterado(evento.target.value)} value={valor}>
                    <option value=''></option>
                    {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa