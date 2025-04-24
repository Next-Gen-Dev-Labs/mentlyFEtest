import { render, act } from '@testing-library/react';
import { useAppContext, AppContextProvider } from '../app-context';
import { renderHook } from '@testing-library/react-hooks';

describe('AppContext', () => {
  it('should provide classic mode state and setter', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AppContextProvider>{children}</AppContextProvider>
    );

    const { result } = renderHook(() => useAppContext(), { wrapper });

    expect(result.current.isClassicMode).toBe(false);
    expect(typeof result.current.setIsClassicMode).toBe('function');

    act(() => {
      result.current.setIsClassicMode(true);
    });

    expect(result.current.isClassicMode).toBe(true);
  });

  it('should throw error when used outside provider', () => {
    const { result } = renderHook(() => useAppContext());
    expect(result.error).toEqual(Error('useAppContext must be used within an AppContextProvider'));
  });
});