import React, { useReducer, useContext, useEffect } from 'react'
import { ProductsContext } from '../../contexts/productsContext'

function StepperButton({ updateCount, id, totalPrice, firstCount }) {
  const initialState = { count: firstCount, buttonDisabled: false }

  const { increasePrice, decreasePrice } = useContext(ProductsContext)

  const reducer = (state, action) => {
    switch (action.type) {
      case 'DECREMENT':
        updateCount(state.count + 1)
        increasePrice(id)
        totalPrice()

        return { count: state.count + 1 }

      case 'INCREMENT':
        if (state.count == 1) {
          return { count: state.count, buttonDisabled: true }
        } else {
          updateCount(state.count - 1)
          decreasePrice(id)
          totalPrice()

          return { count: state.count - 1, buttonDisabled: false }
        }

      default:
        return state
    }
  }

  let [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div className="bui-stepper-buttons">
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          disabled={state.buttonDisabled}
          className="bui-stepper-button"
        >
          -
        </button>
        <span className="bui-stepper-display">{state.count}</span>
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="bui-stepper-button"
        >
          +
        </button>
      </div>
    </>
  )
}

export default StepperButton
