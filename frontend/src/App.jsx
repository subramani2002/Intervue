import { SignedOut, SignIn, SignInButton, SignOutButton, SignedIn, UserButton } from '@clerk/clerk-react'

function App() {

  return (
    <>
      <h1> Welcome to intervue</h1>
      <SignedOut>
        <SignInButton mode='modal'/>
      </SignedOut>

      <SignedIn>
        <SignOutButton /> 
      </SignedIn>

      <UserButton />
    </>
  )
}

export default App
