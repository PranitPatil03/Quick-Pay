import { Button } from "../components/ui/button";
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export default function Page(): JSX.Element {
  return (
    <>
      <div className="">
        <Button>Click me</Button>
      </div>
    </>
  );
}
