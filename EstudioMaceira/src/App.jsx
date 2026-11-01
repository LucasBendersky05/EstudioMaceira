import './App.css'
import { TarjetaPresentacion } from './components/TarjetaPresentacion'

function App() {
  return (
    <main>
      <header className="hero d-flex align-items-center justify-content-center text-center text-white">
        <h1 className="display-3 fw-bold titulo-estudio">Estudio Maceira</h1>
      </header>

      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2 className="subtitulo mb-4">Sobre el estudio</h2>
            <p className="lead texto-estudio">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              consectetur saepe consequatur vel ea tempora, nostrum doloribus
              repellendus iusto libero fuga asperiores, aliquid perferendis vitae?
            </p>
          </div>
        </div>

        <div className="row justify-content-center g-4 mt-4">
          <div className="col-12 col-md-6 col-lg-4">
            <TarjetaPresentacion />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <TarjetaPresentacion />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <TarjetaPresentacion />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App