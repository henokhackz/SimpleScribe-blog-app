import { signIn, signOut } from "@/actions";
import { auth } from "@/auth";
import {
  Navbar as NavBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Avatar,
  Input,
} from "@nextui-org/react";
import { AiOutlineSearch } from "react-icons/ai";

export default async function Navbar() {
  const session = await auth();

  return (
    <NavBar className="px-4 py-2 bg-slate-200 rounded-lg flex justify-between items-center w-full border border-blue-700/40 shadow-md">
      <NavbarBrand>
        <p className="font-bold text-xl text-gray-800">{"<SimpleScribe/>"}</p>
      </NavbarBrand>
      <div className="flex-grow flex justify-center">
        <NavbarContent className="hidden sm:flex w-full max-w-lg gap-4">
          <NavbarItem className="flex-grow">
            <Input
              isClearable
              radius="lg"
              classNames={{
                input: [
                  "bg-transparent",
                  "text-gray-700",
                  "placeholder:text-gray-500",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-sm",
                  "bg-white",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-white/70",
                  "focus-within:bg-white/50",
                  "cursor-text",
                  "border",
                  "border-gray-300",
                  "w-full",
                ],
              }}
              placeholder="Type to search..."
              startContent={
                <AiOutlineSearch className=" mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </NavbarItem>
        </NavbarContent>
      </div>
      <NavbarContent className="flex gap-2" justify="end">
        {!session?.user ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <form action={signIn}>
                <Button
                  type="submit"
                  className="border border-blue-700/20 bg-transparent text-blue-700 hover:bg-blue-100"
                >
                  Login
                </Button>
              </form>
            </NavbarItem>
            <NavbarItem>
              <form action={signIn}>
                <Button
                  color="primary"
                  variant="flat"
                  type="submit"
                  className="bg-blue-700 text-white hover:bg-blue-600"
                >
                  Sign Up
                </Button>
              </form>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem className="hidden md:flex items-center gap-2">
              <p className="text-gray-800">{session?.user?.name}</p>
              <Avatar size="sm" src={session?.user?.image || ""} />
            </NavbarItem>
            <NavbarItem>
              <form action={signOut}>
                <Button
                  className="bg-red-500 text-white hover:bg-red-400"
                  type="submit"
                >
                  Log out
                </Button>
              </form>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </NavBar>
  );
}
