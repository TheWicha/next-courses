import { SignIn } from "@clerk/nextjs";
import SignInDesktop from "@/components/ui/SignIn/SignInDesktop";
import SignInMobile from "@/components/ui/SignIn/SignInMobile";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <SignInDesktop />

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <SignInMobile />
            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
