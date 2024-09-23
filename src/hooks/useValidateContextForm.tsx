import { createContext, useContext, useReducer, ReactNode, FC } from 'react';

interface IFormObject {
  id: string;
  data: unknown;
}

interface IValidateContextState {
  formObjects: IFormObject[];
}

const initialState: IValidateContextState = {
  formObjects: [],
};

const reducer = (
  state: IValidateContextState,
  action: { type: 'add' | 'clear' | 'remove'; payload?: IFormObject | string },
): IValidateContextState => {
  switch (action.type) {
    case 'add':
      if (
        state.formObjects.find(
          (item) => item.id === (action.payload as IFormObject).id,
        )
      ) {
        return state;
      }

      return {
        ...state,
        formObjects: [...state.formObjects, action.payload as IFormObject],
      };
    case 'remove':
      return {
        ...state,
        formObjects: state.formObjects.filter(
          (obj) => obj.id !== action.payload,
        ),
      };
    case 'clear':
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
};

const ValidateContext = createContext<{
  formObjects: IFormObject[];
  addFormObject: (obj: IFormObject) => void;
  clearFormObjects: () => void;
  removeFormObjects: (id: string) => void;
}>({
  formObjects: [],
  addFormObject: () => {},
  clearFormObjects: () => {},
  removeFormObjects: () => {},
});

export const ValidateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addFormObject = (obj: IFormObject) => {
    dispatch({ type: 'add', payload: obj });
  };

  const clearFormObjects = () => {
    dispatch({ type: 'clear' });
  };

  const removeFormObjects = (id: string) => {
    dispatch({ type: 'remove', payload: id });
  };

  return (
    <ValidateContext.Provider
      value={{
        formObjects: state.formObjects,
        addFormObject,
        clearFormObjects,
        removeFormObjects,
      }}
    >
      {children}
    </ValidateContext.Provider>
  );
};

export const useValidateContextForm = () => useContext(ValidateContext);
