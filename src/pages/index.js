import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

import Content from "./components/Content";
import HeroSection from "./components/HeroSection";
import Team from './components/Team';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <HeroSection/>
        <Team/>
        <Content/>
      </div>
    </QueryClientProvider>
  );
}
