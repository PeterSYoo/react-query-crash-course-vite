import './App.css';
import Characters from './components/characters.components';
// Query Client insantiates a new client
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <Characters />
        </QueryClientProvider>
      </div>
    </>
  );
}
