import CompanionBuilderForm from "@/components/companionBuilderForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  return <CompanionBuilderForm />;
};

export default NewCompanion;
