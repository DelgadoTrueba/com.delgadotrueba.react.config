import { HelloWorld } from "./HelloWorld";
import { screen, render } from '@testing-library/react';

describe('HelloWorld', () => {
    it('should render correctly', async () => {
      render(<HelloWorld />);
  
      const mockRouter = screen.getByText('HelloWorld');
  
      expect(mockRouter).toBeInTheDocument();
    });
  });
  