import cesta from '../../img/cesta.png';

export default function CartWidget () {
    return(
        <div>
            <img style={{height: '30px', width: '30px', margin: '0 40px'}} src = {cesta} alt="ícono de cesta"/>
            <p>3</p>
        </div>
    )
}

