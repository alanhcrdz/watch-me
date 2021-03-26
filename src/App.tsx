import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { ContextProvider } from './DataContext';


export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <ContextProvider>
        <SideBar />
        <Content />
      </ContextProvider>
    </div>
  )
}