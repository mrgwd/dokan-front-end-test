import { SignInForm } from "@/components/layout/form/sign-in";
export default function Home() {
  return (
    <div className="my-28 bg-[url('/background.png')] bg-cover bg-center md:mt-36 lg:mt-40">
      <div className="layout text-content-primary space-y-16 font-[family-name:var(--font-figtree)]">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-medium md:text-4xl lg:text-6xl">
            Sign in
          </h1>
          <p className="text-muted-foreground">
            Access our services in one click
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
