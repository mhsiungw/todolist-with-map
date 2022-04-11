import { createRoot } from 'react-dom/client';
import App from './components/App';

const rootContainer = document.getElementById('root')!
const root = createRoot(rootContainer)

root.render(<App/>)

