import styles from '../css/Home.module.css'
import ComponenteProps from './ComponenteProps';
import Topo from './Topo';
function Home(){
    return (
    <>
       
       <section className={styles.corpo_home}>
       
        <ComponenteProps 
            titulo = "GGBank, de Gamer para Gamer"
            texto="O GGBank é um banco que visa ajudar os gamer na sua vida financeira, facilitar processos de compra em jogos com um toque gamificado"
        />
       </section>
       </>
    );
}
export default Home