import React from "react"

import { TawkContextProvider, TawkContext } from "./tawk"

const ContextProviders = ({ children }) => {
  return <TawkContextProvider>{children}</TawkContextProvider>
}
export default ContextProviders
export { TawkContext }
