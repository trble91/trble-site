import { SignIn } from "@clerk/nextjs";


function SignInPage({ searchParams }) {
  const { redirectUrl } = searchParams 
  return (
    <>
      <SignIn mode='modal' redirectUrl={redirectUrl || '/dashboard'} />
      {/* <UserProfile /> */}
     </>
  );
}

export default SignInPage;
