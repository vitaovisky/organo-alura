import './Rodape.css'

const Rodape = () => {
    return(
        <section className='rodapePagina'>
            <div className='container-redes'>
                <a href='https://facebook.com' target='_blank'>
                    <img src='/imagens/fb.png' alt='Facebook'/>
                </a>
                <a href='https://instagram.com' target='_blank'>
                <img src='/imagens/ig.png' alt='Instagram'/>
                </a>
                <a href='https://twitter.com' target='_blank'>
                    <img src='/imagens/tw.png' alt='Twitter'/>
                </a>
            </div>
            <div>
                <img src='/imagens/logo.png' alt='Logo Organo'/>
            </div>
            <div className='container-texto'>
                <h4>Desenvolvido durante estudos Alura</h4>
            </div>
        </section>
    )
}

export default Rodape