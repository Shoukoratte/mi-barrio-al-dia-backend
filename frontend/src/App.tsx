import { useState } from 'react'
import Header from './components/Header'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />

            <main>
                <h2>Reportes de la comunidad</h2>

                <p>Reportes de prueba: {count}</p>

                <button
                    type="button"
                    onClick={() => setCount(previousCount => previousCount + 1)}
                >
                    Agregar reporte de prueba
                </button>
            </main>
        </>
    )
}

export default App