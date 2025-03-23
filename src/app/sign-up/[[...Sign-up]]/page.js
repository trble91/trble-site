import { SignUp } from "@clerk/nextjs";

async function SignUpPage({ searchParams }) {
  const { redirectUrl } = searchParams 
  return (
    <>
      <SignUp mode='modal' redirectUrl={redirectUrl || '/'} />
    </>
  );
}

export default SignUpPage;
