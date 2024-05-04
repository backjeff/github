interface UseCase<T> {
  fetch: () => void;
  isLoading: boolean;
  isPending: boolean;
  isError: boolean;
  data: T | undefined;
  error: Error | null;
}

export type { UseCase };
