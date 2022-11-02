import Image from "next/future/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
        title={"Nosotros"}
        description={"Sobre nosotros, guitarLA, tienda de música"}
    >
        <main className="contenedor">
            <h1 className="heading">Nosotros</h1>
            <div className={styles.contenido}>
                <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
                <div>
                    <p>
                        Phasellus efficitur feugiat convallis. Cras eget elementum dui, at lobortis est. Praesent at posuere massa. Quisque dictum sem sit amet mauris finibus, at cursus orci egestas. Cras congue sagittis eleifend. Nam sollicitudin libero posuere felis lobortis, ac imperdiet nisi rhoncus. Vestibulum luctus felis ut enim sollicitudin commodo.
                    </p>
                    <p>
                        Maecenas nec efficitur dui. Mauris finibus ultricies libero, ac fringilla felis bibendum sed. Nulla et posuere elit. Quisque molestie in tortor porta blandit. Aenean vulputate risus orci, vitae molestie purus condimentum maximus. Cras pharetra erat non congue lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                </div>
            </div>
        </main>
    </Layout>
  )
}
