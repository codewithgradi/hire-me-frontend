import AuthForm from "@/components/AuthForm";
import Card from "@/components/Card";
import CreateCardForm from "@/components/CreateCardForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <CreateCardForm/>
      <AuthForm />
      <Card/>
    </div>
  );
}
